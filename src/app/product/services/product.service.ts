import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient,
  ) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("api/products")
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>("api/products/" + id)
  }

  getProductsOfUserById(user_id: number): Observable<Product[]> {
    return this.http.get<Product[]>("api/userProducts", {params: {user_id}})
  }

  checkIfInCart(product_id: number, user_id: number): Observable<boolean> {
    return this.http.get<boolean>("api/cartCheck", {params: {product_id, user_id}})
  }
}
