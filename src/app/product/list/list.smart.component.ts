import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import { getProductsChild } from "../store/actions";

@Component({
    selector: "list-smart-component",
    template: '<app-list [products]="products"></app-list>'
})
export class ListSmartComponent {
    products: Product[] = []

    constructor(
        private store: Store<{productsChild: Product[]}>
    ) {}

    ngOnInit(): void {
        this.getCards()
    }

    getCards() {
        this.store.dispatch(getProductsChild());

        this.store.select("productsChild").subscribe(products => this.products = products)
    }
}