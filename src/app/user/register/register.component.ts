import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdditionalValidators } from 'src/app/shared/additional-validators';
import { User } from 'src/app/shared/interfaces/user';
import { createUser } from 'src/app/user/store/actions';
import { UserState } from 'src/app/user/store/reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;
  user!: User;

  constructor (
    private additionalValidators: AdditionalValidators,
    private router: Router,
    private store: Store<{user: UserState}>
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      passwordRepeat: new FormControl(null)
    }, {
      validators: this.additionalValidators.passwordMatch()
    });
  }

  submit() {
    const user: User = {
      login: this.form.value["login"],
      password: this.form.value["password"]
    }

    this.store.dispatch(createUser(user));
  }
}
