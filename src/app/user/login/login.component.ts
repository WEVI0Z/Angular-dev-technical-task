import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent {
  constructor (
    private auth: AuthService
  ) {}

  ngOnInit() {
    let user!: User;

    this.auth.login({
      login: "123",
      password: "123"
    }).subscribe(data => console.log(data))
  }
}
