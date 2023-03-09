import {createAction, props} from "@ngrx/store"
import { Product } from "../../interfaces/product"
import { User } from "../../interfaces/user"

export const getUser = createAction(
    "[Card] get user",
    props<Product>()
)

export const getUserSuccess = createAction(
    "[Card] get user success",
    props<{user: User | undefined, ifInCart: boolean | undefined}>()
)

export const addProductToCartChild = createAction(
    "[Card] add product to cart",
    props<{user_id: number, product_id: number}>()
)

export const addProductToCartSuccessChild = createAction(
    "[Card] add product to cart success",
    props<{ifInCart: boolean}>()
)

export const removeProductFromCartChild = createAction(
    "[Card] remove product from cart",
    props<{user_id: number, product_id: number}>()
)

export const removeProductFromCartSuccessChild = createAction(
    "[User] remove product from cart success",
    props<{ifInCart: boolean}>()
)