import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/shared/interfaces/product";
import * as actions from "./actions";

const initialState: Product[] = [];

export const productReducer = createReducer(
    initialState,
    on(actions.getProductsChildSuccess, (state, data) => {
        return data.products;
    }),
    on(actions.clearData, (state) => {
        return [];
    })
)