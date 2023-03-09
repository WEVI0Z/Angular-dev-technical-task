import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import { clearData, getGoods } from "../store/actions";
import { Observable } from "rxjs";

@Component({
    selector: "list-smart-component",
    template: '<app-list [products]="products"></app-list>'
})
export class ListSmartComponent {
    products!: Product[];

    constructor(
        private store: Store<{goods: Product[]}>
    ) {}

    ngOnInit(): void {
        this.getCards();
    }

    getCards() {
        this.store.dispatch(getGoods());
        
        this.store.select("goods").subscribe(data => this.products = data);
    }
}