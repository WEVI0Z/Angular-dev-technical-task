import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './interfaces/user';
import { USERS } from './mock-users';
import { Product } from './interfaces/product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = USERS;
    const products: Product[] = PRODUCTS;

    users.map(user => {
      user.token = this.genToken()
      user.expDate = this.genExpDate()
    })

    return {
      users,
      products
    };
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id!)) + 1 : 1;
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
