import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/shared/interfaces/product";

@Component({
    selector: "list-smart-component",
    template: '<app-list [products]="products"></app-list>'
})
export class ListSmartComponent {
    products: Product[] = this.route.snapshot.data["goods"];

    constructor(
        private route: ActivatedRoute,
    ) {}
}