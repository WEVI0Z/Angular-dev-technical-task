import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/user/reducer';
import { addProductToCart, removeProductFromCart } from 'src/app/store/user/actions';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Product;
  user!: User;

  cardCondition: boolean = false;

  constructor(
    protected authService: AuthService,
    private productService: ProductService,
    private productStore: Store<{products: Product[]}>,
    private userStore: Store<{user: UserState}>,
  ) {}

  ngOnInit(): void {
    this.checkIfInCart();
    this.userStore.select("user").subscribe(data =>
      this.user = data.user!  
    );
  }

  checkIfInCart() {
    this.userStore.select("user").subscribe(user => {
      const userProducts = user.userProducts.map(item => item.product_id);

      this.cardCondition = userProducts.findIndex(item => item === this.product.id!) !== -1;
    })
  }

  addToCart() {
    this.cardCondition = true;

    this.userStore.dispatch(addProductToCart({user_id: this.authService.user?.id!, product_id: this.product.id!}))
  }

  removeFromCart() {
    this.cardCondition = false;

    this.userStore.dispatch(removeProductFromCart({user_id: this.authService.user?.id!, product_id: this.product.id!}))
    }
}
