import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './interfaces/user';

@Injectable()
export class AuthService {
  user: User | undefined = undefined;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  get token(): string {
    if(this.user?.expDate && this.user.token) {
      const expDate = new Date(this.user?.expDate);
      const now = new Date();

      if (now <= expDate) {
        return this.user.token;
      }
    }

    this.user = undefined;

    return "";
  }
  
  login(login: string, password: string): Observable<User> {
    return this.http.get<User[]>("api/users").
      pipe(
        map(data => this.user = data.filter(item => item.login === login && item.password === password)[0]),
      );
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>("api/users", user, this.httpOptions);
  }
}
