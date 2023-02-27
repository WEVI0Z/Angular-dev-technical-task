import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { User } from './interfaces/user';
import { USERS } from './mock-users';
import { Product } from './interfaces/product';
import { PRODUCTS } from './mock-products';
import { USER_PRODUCT } from './mock-user-product';
import { UserProduct } from './interfaces/user-product';
import { HttpClient, HttpHandler, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideRouter } from '@angular/router';
import { BackendService } from 'angular-in-memory-web-api';

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

  get(reqInfo: RequestInfo, db: {}) {
    const url = reqInfo.url;
    const reqParams = reqInfo.query;

    if (url.includes("userProducts") && reqParams.get("user_id")) {
      return this.getProductsByUserId(+reqParams.get("user_id")![0]);
    } else if (url.includes("cartCheck") && reqParams.get("user_id") && reqParams.get("product_id")) {
      return this.checkIfInCart(+reqParams.get("product_id")![0], +reqParams.get("user_id")![0]);
    }

    return undefined;
  }

  getProductsByUserId(userId: number) {
    let products: Product[] = [];
    const targetIds: number[] = [];

    const database = this.createDb() 

    database.userProduct.map(data => {
      if(data.user_id === userId) { 
        targetIds.push(data.product_id);
      }
    });

    products = database.products.filter(data => targetIds.indexOf(data.id!) !== -1);
    
    const response = new HttpResponse({status: 200, body: products});

    return new Observable(subscriber => subscriber.next(response));
  }

  checkIfInCart(productId: number, userId: number) {
    const database = this.createDb()

    const check: boolean = database.userProduct.filter(data => data.product_id === productId && data.user_id === userId).length !== 0 ? true : false;

    const response = new HttpResponse({status: 200, body: check});

    return new Observable(subscriber => subscriber.next(response));
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
