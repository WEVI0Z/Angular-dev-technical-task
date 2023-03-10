import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import { User } from "../interfaces/user";
import { AuthService } from "src/app/authorization/auth.service";

@Component({
    selector: "card-smart-component",
    template: `
    <app-card
        [product]="product"
        [user]="user"
        [cardCondition]="cardCondition"
        [addToCart]="addToCart"
        [removeFromCart]="removeFromCart"
        [service]="service"
    ></app-card>`
})
export class CardSmartComponent {
    @Input() product!: Product;
    user?: User;
  
    cardCondition?: boolean;
  
    constructor(
      protected service: AuthService,
    ) {}
  
    ngOnInit(): void {
      this.user = this.service.user;
      this.checkIfInCart();
    }
  
    checkIfInCart() {

      if(this.user) {
        const userProducts = this.service.findUserProductsById(this.user.id!).subscribe(userProducts => {
          this.cardCondition = userProducts.findIndex(item => item.product_id === this.product.id!) !== -1;
        });

      }
    }
  
    addToCart() {
      this.cardCondition = true;

      this.service.addProductToCart(this.user!.id!, this.product.id!).subscribe()
    }
  
    removeFromCart() {
      this.cardCondition = false;

      this.service.removeFromCart(this.user!.id!, this.product.id!).subscribe()
    }
}