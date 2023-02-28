import {createAction, props} from "@ngrx/store"
import { Product } from "src/app/shared/interfaces/product"

export const getProducts = createAction(
    "[Product] get products"
)

export const getProductsSuccess = createAction(
    "[Product] get products success",
    props<{products: Product[]}>()
)
