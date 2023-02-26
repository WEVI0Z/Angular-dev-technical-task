import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './interfaces/user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = USERS;

    users.map(user => {
      user.token = this.genToken()
      user.expDate = this.genExpDate()
    })

    return {
      users
    };
  }

  genId(users: User[]): number {
    return users.length;
  }

  genToken(): string {
    return "srgrlgkjrsljgwkfwgwrgf";
  }

  genExpDate(): number {
    let date = new Date();
    date.setHours(date.getHours() + 1);
    return date.getTime();
  }
}
