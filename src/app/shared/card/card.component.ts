import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/user/reducer';
import { addProductToCart, removeProductFromCart } from 'src/app/store/user/actions';

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
    private store: Store<{user: UserState}>
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

    this.store.dispatch(addProductToCart({user_id: this.authService.user?.id!, product_id: this.product.id!}))
  }

  removeFromCart() {
    this.cardCondition = false;

    this.store.dispatch(removeProductFromCart({user_id: this.authService.user?.id!, product_id: this.product.id!}))
    }
}
