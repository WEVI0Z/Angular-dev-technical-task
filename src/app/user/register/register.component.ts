import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs';
import { AdditionalValidators } from 'src/app/shared/additional-validators';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/interfaces/user';
import { createUser } from 'src/app/store/user/actions';
import { UserState } from 'src/app/store/user/reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;
  user!: User;

  constructor (
    private auth: AuthService,
    private additionalValidators: AdditionalValidators,
    private router: Router,
    private store: Store<{user: UserState}>
  ) {}

  ngOnInit() {
    this.store.select("user").subscribe(user => {
      if(user.user) {
        this.router.navigate(["product/list"])
      }
    });

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
    })
  }

  submit() {
    const user: User = {
      login: this.form.value["login"],
      password: this.form.value["password"]
    }

    this.store.dispatch(createUser(user));
  }
}
