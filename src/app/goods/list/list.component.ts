import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { Store } from '@ngrx/store';
import { Observable, mergeMap } from 'rxjs';
import { getProducts } from 'src/app/store/product/actions';
import { User } from 'src/app/shared/interfaces/user';
import { UserState } from 'src/app/store/user/reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  products: Product[] = [];

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private productStore: Store<{products: Product[]}>,
    private userStore: Store<{user: UserState}>,
  ) {}
  
  ngOnInit(): void {
    this.productStore.dispatch(getProducts());
    this.getProducts();
  }

  getProducts() {    
    this.userStore.select("user").subscribe(user => {
      this.productStore.select("products").subscribe(products => {
        const userProducts = user.userProducts.map(item => item.product_id);
        
        this.products = products.filter(product => userProducts.findIndex(item => item === product.id!) !== -1)
      });
    })
  }
}
