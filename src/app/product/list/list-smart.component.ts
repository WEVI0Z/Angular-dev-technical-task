import { Component } from "@angular/core";
import { Product } from "src/app/shared/interfaces/product";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
    selector: "list-smart-component",
    template: '<app-list [products]="products"></app-list>'
})
export class ListSmartComponent {
    products!: Product[];

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.products = this.route.snapshot.data["products"];
    }
}