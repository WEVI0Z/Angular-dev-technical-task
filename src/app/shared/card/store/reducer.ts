import { createReducer, createSelector, on, State } from "@ngrx/store";
import { User } from "src/app/shared/interfaces/user";
import * as actions from "./actions";

export interface CardState {
    user: User | undefined,
    ifInCart: boolean | undefined,
}

const initialState: CardState = {
    user: undefined,
    ifInCart: undefined,
};

export const cardReducer = createReducer(
    initialState,
    on(actions.getUserSuccess, (state, data) => {
        return {ifInCart: data.ifInCart, user: data.user};
    })
)

const selectState = (state: CardState) => state;

export const selectUser = createSelector(
    selectState,
    (state: CardState) => state.user
)

export const selectIfInCardCondition = createSelector(
    selectState,
    (state: CardState) => state.ifInCart
)