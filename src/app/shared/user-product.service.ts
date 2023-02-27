import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getProductsOfUserById(user_id: number): Observable<Product[]> {
    return this.http.get<Product[]>("api/userProduct", {params: {user_id}})
  }

  getUsersOfProductById(id: number): Observable<Product> {
    return this.http.get<Product>("api/userProduct/" + id)
  }

//   addConnection(product: Product): Observable<Product> {
//     return this.http.post<Product>("api/products", product)
//   }
}
