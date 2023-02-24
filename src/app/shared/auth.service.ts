import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | undefined = undefined;

  constructor(
    private http: HttpClient,
  ) { }
  
  login(user: User): Observable<User> {
    return this.http.get<User[]>("api/users").
      pipe(
        map(data => this.user = data.filter(item => item.login === user.login && item.password === user.password)[0]),
      );
  }
  
}
