import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("api/products")
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>("api/products/" + id)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>("api/products", product)
  }

  getProductsOfUserById(user_id: number): Observable<Product[]> {
    return this.http.get<Product[]>("api/userProduct", {params: {user_id}})
  }
}
