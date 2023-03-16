import {createAction, props} from "@ngrx/store"
import { User } from "src/app/shared/interfaces/user"
import { UserProduct } from "src/app/shared/interfaces/user-product"
import { UserState } from "./reducer"

export const login = createAction(
    "[User] login",
    props<User>()
)

export const loginSuccess = createAction(
    "[User] login success",
    props<UserState>()
)

export const loginFailed = createAction(
    "[User] login failure"
)

export const createUser = createAction(
    "[User] create user",
    props<User>()
)

export const createUserSuccess = createAction(
    "[User] create user success",
    props<UserState>()
)

export const logout = createAction(
    "[User] logout",
)

export const logoutSuccess = createAction(
    "[User] logout success",
)

export const addProductToCart = createAction(
    "[User] add product to cart",
    props<{user_id: number, product_id: number}>()
)

export const addProductToCartSuccess = createAction(
    "[User] add product to cart success",
    props<UserProduct>()
)

export const removeProductFromCart = createAction(
    "[User] remove product from cart",
    props<{user_id: number, product_id: number}>()
)

export const removeProductFromCartSuccess = createAction(
    "[User] remove product from cart success",
    props<{id: number}>()
)