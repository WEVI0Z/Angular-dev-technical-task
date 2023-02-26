import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null),
      passwordRepeat: new FormControl(null)
    })
  }

  submit() {
    this.user = {login: this.form.value["login"], password: this.form.value["password"]};

    this.auth.createUser(this.user)
      .subscribe(user => console.log(user));
  }
}
