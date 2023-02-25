import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;

  constructor (
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null)
    })
  }

  submit() {
    this.auth.login(this.form.value["login"], this.form.value["password"])
      .subscribe()
  }
}
