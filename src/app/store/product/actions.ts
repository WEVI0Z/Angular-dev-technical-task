import {createAction, props} from "@ngrx/store"
import { Product } from "src/app/shared/interfaces/product"

export const getProducts = createAction(
    "[Product] get products"
)

export const getProductsSuccess = createAction(
    "[Product] get products success",
    props<{products: Product[]}>()
)

export const getProduct = createAction(
    "[Product] get product",
    props<{id: number}>()
)

export const getProductSuccess = createAction(
    "[Product] get product success",
)

export const getProductsOfUserById = createAction(
    "[Product] get products of user by id",
    props<{user_id: number}>()
)

export const getProductsOfUserByIdSuccess = createAction(
    "[Product] get products of user by id success",
    props<{products: Product[]}>()
)

export const checkIfInCart = createAction(
    "[Product] check if product in cart",
    props<{product_id: number, user_id: number}>()
)

export const checkIfInCartSuccess = createAction(
    "[Product] check if product in cart",
    props<{bool: boolean}>()
)