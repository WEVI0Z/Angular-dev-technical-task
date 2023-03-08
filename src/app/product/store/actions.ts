import {createAction, props} from "@ngrx/store"
import { Product } from "src/app/shared/interfaces/product"

export const getProductsChild = createAction(
    "[Product list] get products",
)

export const getProductsChildSuccess = createAction(
    "[Product list] get products success",
    props<{products: Product[]}>()
)

export const clearData = createAction(
    "[Product list] clear goods list data"
)