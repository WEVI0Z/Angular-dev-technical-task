import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import * as actions from "./actions";

const initialState: Product[] = [];

export const goodsReducer = createReducer(
    initialState,
    on(actions.getGoodsSuccess, (state, data) => {
        return data.goods;
    }),
    on(actions.clearData, (state) => {
        return [];
    })
)