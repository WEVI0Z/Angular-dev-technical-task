import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/shared/interfaces/user";
import * as actions from "./actions";

export interface userChildState {
    isUser: boolean,
}

const initialState: userChildState = {
    isUser: false,
};

export const headerReducer = createReducer(
    initialState,
    on(actions.getUserSuccess, (state, userState) => {
        return {isUser: userState.isUser};
    }),
    on(actions.childLogoutSuccess, (state) => {
        return {isUser: false};
    })
)