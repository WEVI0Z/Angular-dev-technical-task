import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { getProducts } from 'src/app/store/product/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  products$: Observable<Product[]> = this.store.select("products");
  
  constructor(
    private productService: ProductService,
    private store: Store<{products: Product[]}>
  ) {}

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.store.dispatch(getProducts());
  }
}
