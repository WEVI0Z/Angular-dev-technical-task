import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "src/app/shared/services/product.service";
import { GoodsService } from "../goods.service";

@Injectable({
    providedIn: "root"
})
export class ListResolver implements Resolve<Product[]> {
    constructor(
        private service: GoodsService,
    ) {}
    
    resolve(): Observable<Product[]> {
        return this.service.getProducts();
    }
}