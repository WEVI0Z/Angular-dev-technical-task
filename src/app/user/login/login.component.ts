import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (
    private auth: AuthService
  ) {}

  ngOnInit() {
    let user!: User;

    this.auth.login("123", "123").subscribe(data => console.log(data))
  }

  doSome() {
    console.log(this.auth.token)
  }
}
