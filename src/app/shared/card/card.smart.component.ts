import { Component, Input, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import { UserState } from "src/app/store/user/reducer";
import { User } from "../interfaces/user";
import { CardComponent } from "./card.component";
import { CardState } from "./store/reducer";
import { addProductToCartChild, getUser, removeProductFromCartChild } from "./store/actions";
import { map, Observable } from "rxjs";

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

    user: Observable<User | undefined> = this.store.select("card").pipe(map(data => data.user));
    cardCondition: Observable<boolean> = this.store.select("card").pipe(map(data => !!data.ifInCart));

    @ViewChild(CardComponent) cardComponent!: CardComponent
  
    constructor(
      protected oldStore: Store<{user: UserState}>,
      protected store: Store<{card: CardState}>
    ) {}
  
    async ngOnInit() {
      await this.store.dispatch(getUser(this.product));
    }
  
    addToCart() {
      this.user.subscribe(user => {
        this.store.dispatch(addProductToCartChild({user_id: user!.id!, product_id: this.product.id!}))
      })
    }
  
    removeFromCart() {
      this.user.subscribe(user => {
        this.store.dispatch(removeProductFromCartChild({user_id: user!.id!, product_id: this.product.id!}))
      })
    }
}