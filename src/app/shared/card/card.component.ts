import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Product;

  cardCondition: boolean = false;

  constructor(
    protected authService: AuthService,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.checkIfInCart();
  }

  checkIfInCart() {
    this.productService.checkIfInCart(this.product.id!, this.authService.user?.id!).subscribe(check => {
      this.cardCondition = check;
    })
  }

  addToCart() {
    this.cardCondition = true;

    this.authService.addProductToCart(this.authService.user?.id!, this.product.id!).subscribe();
  }

  removeFromCart() {
    this.cardCondition = false;

    this.authService.findUserProductId(this.authService.user?.id!, this.product.id!).subscribe(data => {
      this.authService.removeFromCart(data[0].id).subscribe();
    });
  }
}
