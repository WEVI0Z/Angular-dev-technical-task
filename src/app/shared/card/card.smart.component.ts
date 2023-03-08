import { Component, Input, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import { UserState } from "src/app/store/user/reducer";
import { User } from "../interfaces/user";
import { addProductToCart, removeProductFromCart } from "src/app/store/user/actions";
import { CardComponent } from "./card.component";

@Component({
    selector: "card-smart-component",
    template: `
    <app-card
        [product]="product"
        [user]="user"
        [cardCondition]="cardCondition"
        [addToCart]="addToCart"
        [removeFromCart]="removeFromCart"
        [store]="this.store"
    ></app-card>`
})
export class CardSmartComponent {
    @Input() product!: Product;
    user!: User;
  
    cardCondition: boolean = false;

    @ViewChild(CardComponent) cardComponent!: CardComponent
  
    constructor(
      protected store: Store<{user: UserState}>,
    ) {}
  
    ngOnInit(): void {
      this.checkIfInCart();
      this.store.select("user").subscribe(data =>
        this.user = data.user!  
      );
    }
  
    checkIfInCart() {
      this.store.select("user").subscribe(user => {
        const userProducts = user.userProducts.map(item => item.product_id);
  
        this.cardCondition = userProducts.findIndex(item => item === this.product.id!) !== -1;
      })
    }
  
    addToCart() {
      this.cardCondition = true;

      this.store.dispatch(addProductToCart({user_id: this.user.id!, product_id: this.product.id!}))
    }
  
    removeFromCart() {
      this.cardCondition = false;
  
      this.store.dispatch(removeProductFromCart({user_id: this.user.id!, product_id: this.product.id!}))
    }
}