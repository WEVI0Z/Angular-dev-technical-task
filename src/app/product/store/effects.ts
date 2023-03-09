import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import * as actions from "./actions";
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/interfaces/product';
import { getProducts } from 'src/app/store/product/actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private store: Store<{products: Product[]}>,
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getProductsChild),
      tap(() => this.store.dispatch(getProducts())),
      mergeMap(() =>
        this.store.select("products").pipe(
          map(data => {
            console.log(data)
            return actions.getProductsChildSuccess({products: data});
          }),
        )),
      )
    );
}
