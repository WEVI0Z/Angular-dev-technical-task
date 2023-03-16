import { Injectable } from "@angular/core";
import { Product } from "src/app/shared/interfaces/product";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { GoodsService } from "../services/goods.service";

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