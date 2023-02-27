import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './interfaces/user';
import { USERS } from './mock-users';
import { Product } from './interfaces/product';
import { PRODUCTS } from './mock-products';
import { USER_PRODUCT } from './mock-user-product';
import { UserProduct } from './interfaces/user-product';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = USERS;
    const products: Product[] = PRODUCTS;
    const userProduct: UserProduct[] = USER_PRODUCT;

    users.map(user => {
      user.token = this.genToken()
      user.expDate = this.genExpDate()
    })

    return {
      users,
      products,
      userProduct
    };
  }

  getByUserId(reqInfo: any) {
    const user_id = reqInfo.query.get('user_id');
    console.log(user_id);
    const products = this.createDb().userProduct.filter((element) => element.user_id === user_id);
    return reqInfo.utils.createResponse$(() => ({
      body: { products },
      status: 200,
    }));
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id!)) + 1 : 1;
  }

  genToken(): string {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyfQ.Cy9JG4I1j75HLKT-XXE2ItZB1YlOzxfZlP14tGh9Dg0";
  }

  genExpDate(): number {
    let date = new Date();
    date.setHours(date.getHours() + 1);
    return date.getTime();
  }
}
