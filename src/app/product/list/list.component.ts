import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  products$!: Observable<Product[]>
  
  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.products$ = this.productService.getProducts();
  }
}
