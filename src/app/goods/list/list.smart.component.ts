import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import { AuthService } from "src/app/shared/services/auth.service";
import { ProductService } from "src/app/shared/services/product.service";
import { getProducts } from "src/app/store/product/actions";
import { UserState } from "src/app/store/user/reducer";
import { clearData, getGoods } from "../store/actions";

@Component({
    selector: "list-smart-component",
    template: '<app-list [products]="products"></app-list>'
})
export class ListSmartComponent {
    products: Product[] = []

    constructor(
        private store: Store<{goods: Product[]}>
    ) {}

    ngOnInit(): void {
        this.getCards();
    }

    ngOnDestroy() {
        this.store.dispatch(clearData());
    }

    getCards() {
        this.store.dispatch(getGoods());
        
        this.store.select("goods").subscribe(data => {
            this.products = data;
        })
    }
}