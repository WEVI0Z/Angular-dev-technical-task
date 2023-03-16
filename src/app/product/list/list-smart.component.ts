import { Component } from "@angular/core";
import { Product } from "src/app/shared/interfaces/product";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "list-smart-component",
    template: '<app-list [products]="products"></app-list>'
})
export class ListSmartComponent {
    products: Product[] = this.route.snapshot.data["products"];

    constructor(
        private route: ActivatedRoute
    ) {}
}