import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import { getProducts } from "src/app/store/product/actions";

@Component({
    selector: "list-smart-component",
    template: '<app-list [products]="products"></app-list>'
})
export class listSmartComponent {
    products: Product[] = []

    constructor(
        private store: Store<{products: Product[]}>
    ) {}

    ngOnInit(): void {
        this.getCards()
    }

    getCards() {
        this.store.dispatch(getProducts());

        this.store.select("products").subscribe(products => this.products = products)
    }
}