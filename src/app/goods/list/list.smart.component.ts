import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import { AuthService } from "src/app/shared/services/auth.service";
import { ProductService } from "src/app/shared/services/product.service";
import { getProducts } from "src/app/store/product/actions";
import { UserState } from "src/app/store/user/reducer";

@Component({
    selector: "list-smart-component",
    template: '<app-list [products]="products"></app-list>'
})
export class listSmartComponent {
    products: Product[] = []

    constructor(
        private productStore: Store<{products: Product[]}>,
        private userStore: Store<{user: UserState}>,
    ) {}

    ngOnInit(): void {
        this.getCards();
    }

    getCards() {
        this.productStore.dispatch(getProducts());
        
        this.userStore.select("user").subscribe(user => {
            this.productStore.select("products").subscribe(products => {
                const userProducts = user.userProducts.map(item => item.product_id);
                
                this.products = products.filter(product => userProducts.findIndex(item => item === product.id!) !== -1)
            });
        })
    }
}