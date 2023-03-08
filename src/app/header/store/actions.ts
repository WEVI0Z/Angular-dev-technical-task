import {createAction, props} from "@ngrx/store"

export const getUser = createAction(
    "[Header] get user",
)

export const getUserSuccess = createAction(
    "[Header] get user success",
    props<{isUser: boolean}>()
)

export const childLogout = createAction(
    "[Header] logout",
)

export const childLogoutSuccess = createAction(
    "[Header] logout success",
)