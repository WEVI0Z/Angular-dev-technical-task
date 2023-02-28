import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/shared/interfaces/user";
import * as actions from "./actions";
import { UserProduct } from "src/app/shared/interfaces/user-product";

export interface UserState {
    user?: User,
    userProducts: UserProduct[],
}

const initialState: UserState = {
    user: undefined,
    userProducts: [],
};

export const userReducer = createReducer(
    initialState,
    on(actions.loginSuccess, (state, data) => {
        return {user: data.user, userProducts: data.userProducts}
    }),
    on(actions.createUserSuccess, (state, data) => {
        return {user: data.user, userProducts: data.userProducts}
    }),
    on(actions.logoutSuccess, (state) => {
        return {user: undefined, userProducts: []}
    }),
    on(actions.addProductToCartSuccess, (state, data) => {
        return {user: state.user, userProducts: [...state.userProducts, data]}
    }),
    on(actions.removeProductFromCartSuccess, (state, data) => {
        return {user: state.user, userProducts: state.userProducts.filter(item => item.id !== data.id)}
    })
)