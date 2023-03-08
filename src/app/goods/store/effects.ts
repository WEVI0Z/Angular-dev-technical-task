import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import * as actions from "./actions";
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/interfaces/product';
import { getProducts } from 'src/app/store/product/actions';
import { UserState } from 'src/app/store/user/reducer';

@Injectable()
export class GoodsEffects {
  constructor(
    private actions$: Actions,
    private productStore: Store<{products: Product[]}>,
    private userStore: Store<{user: UserState}>,
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getGoods),
      tap(() => this.productStore.dispatch(getProducts())),
      mergeMap(() =>
        this.userStore.select("user").pipe(
          mergeMap(user => 
            this.productStore.select("products").pipe(
              map(products => {
                const userProducts = user.userProducts.map(item => item.product_id);
                
                const goods = products.filter(product => userProducts.findIndex(item => item === product.id!) !== -1)
                
                return actions.getGoodsSuccess({goods})
              })
            )  
          )
        )
      )
    )
  );
}
