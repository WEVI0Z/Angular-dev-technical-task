import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, UnsubscriptionError, map } from 'rxjs';
import { User } from './interfaces/user';

@Injectable()
export class AuthService {
  user: User | undefined = undefined;

  constructor(
    private http: HttpClient,
  ) { }

  get token() {
    if(this.user?.expDate) {
      const expDate = new Date(this.user?.expDate);
      const now = new Date();

      console.log(expDate, now)

      if (now <= expDate) {
        return this.user!.token;
      }
    }

    this.user = undefined;

    return null;
  }
  
  login(login: string, password: string): Observable<User> {
    return this.http.get<User[]>("api/users").
      pipe(
        map(data => this.user = data.filter(item => item.login === login && item.password === password)[0]),
      );
  }
  
}
