import {createAction, props} from "@ngrx/store"
import { Product } from "src/app/shared/interfaces/product"

export const getGoods = createAction(
    "[Goods list] get goods",
)

export const getGoodsSuccess = createAction(
    "[Goods list] get goods success",
    props<{goods: Product[]}>()
)

export const clearData = createAction(
    "[Goods list] clear goods list data"
)