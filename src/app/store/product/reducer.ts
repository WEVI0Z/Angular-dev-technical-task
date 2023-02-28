import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/shared/interfaces/user";
import * as actions from "./actions";
import { UserProduct } from "src/app/shared/interfaces/user-product";
import { Product } from "src/app/shared/interfaces/product";

const initialState: Product[] = [];

export const productReducer = createReducer(
    initialState,
    
)