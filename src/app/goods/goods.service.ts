import { Injectable } from "@angular/core";
import { map, mergeMap, Observable, tap } from "rxjs";
import { Product } from "../shared/interfaces/product";
import { User } from "../shared/interfaces/user";
import { AuthService } from "../authorization/auth.service";
import { ProductService } from "../shared/services/product.service";

@Injectable({
    providedIn: "root",
})
export class GoodsService {
    constructor(
        private auth: AuthService,
        private products: ProductService,
    ) {}
    
    getProducts(): Observable<Product[]> {
        const user: User = this.auth.user!;

        return this.auth.findUserProductsById(user.id!).pipe(
            map(userProducts => userProducts.map(item => item.product_id)),
            mergeMap(productsIds =>
                this.products.getProducts()
                .pipe(
                    map(products => {
                        return products.filter(product => productsIds.findIndex(item => item === product.id!) !== -1)
                    })
                )
            )
        )
    }
}