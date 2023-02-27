import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { AdditionalValidators } from 'src/app/shared/additional-validators';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/interfaces/user';

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
    })
  }

  submit() {
    this.user = {
      login: this.form.value["login"],
      password: this.form.value["password"]
    };

    this.auth.createUser(this.user).subscribe(() => {
      this.router.navigate(["product/list"]);
    })
  }
}
