import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  products: Product[] = []
  
  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
