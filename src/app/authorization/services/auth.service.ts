import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, map, mergeMap, tap } from 'rxjs';
import { User } from '../../shared/interfaces/user';
import { Router } from '@angular/router';
import { UserProduct } from '../../shared/interfaces/user-product';

@Injectable()
export class AuthService {
  user: User | undefined = undefined;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>("api/user/" + this.user?.id);
  }

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
  
  login(login: string, password: string): Observable<User | undefined> {
    return this.http.get<User[]>("api/users").
      pipe(
        map(data => {
          const index = data.findIndex(item => item.login === login && item.password === password);

          if(index !== -1) {
            this.router.navigate(["product/list"]);
            return this.user = data[index];
          } else {
            this.router.navigate(["user/login"], {queryParams: {error: "Failed"}});
            return undefined;
          }
        })
      );
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>("api/users", user, this.httpOptions).pipe(
      tap(user => {
        this.router.navigate(["product/list"]);
        user.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyfQ.Cy9JG4I1j75HLKT-XXE2ItZB1YlOzxfZlP14tGh9Dg0";
        user.expDate = this.genExpDate();
        this.user = user;
      })
    )
  }

  logout(): void {
    this.user = undefined;
    this.router.navigate(["product/list"]);
  }

  addProductToCart(user_id: number, product_id: number): Observable<UserProduct> {
    const userProduct = {user_id, product_id};

    return this.http.post<UserProduct>("api/userProduct", userProduct, this.httpOptions);
  }

  findUserProductId(user_id: number, product_id: number): Observable<UserProduct> {
    return this.http.get<UserProduct[]>("api/userProduct", {params: {user_id, product_id}}).pipe(
      map(item => item[0]),
    );
  }

  findUserProductsById(user_id: number): Observable<UserProduct[]> {
    return this.http.get<UserProduct[]>("api/userProduct", {params: {user_id}});
  }

  removeFromCart(user_id: number, product_id: number): Observable<UserProduct> {
    return this.findUserProductId(user_id, product_id).pipe(
      mergeMap(userProduct => {
        this.http.delete<UserProduct>("api/userProduct/" + userProduct.id).subscribe();

        return new Observable<UserProduct>(subsciber => subsciber.next(userProduct));
      })
    )
  }

  genExpDate(): number {
    let date = new Date();
    date.setHours(date.getHours() + 1);
    return date.getTime();
  }
}
