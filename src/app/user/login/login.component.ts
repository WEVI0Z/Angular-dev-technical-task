import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null)
    })
  }

  submit() {
    this.auth.login(this.form.value["login"], this.form.value["password"])
      .subscribe(user => {
        if(user) {
          this.router.navigate(["product/list"])
        } else {
          this.router.navigate(["user/login"], {
            queryParams: {error: true}
          })
        }
      })
  }
}
