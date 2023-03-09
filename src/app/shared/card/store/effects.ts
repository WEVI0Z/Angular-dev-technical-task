import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as actions from "./actions";
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/user/reducer';
import { addProductToCart, removeProductFromCart } from 'src/app/store/user/actions';

@Injectable()
export class CardEffects {
  constructor(
    private actions$: Actions,
    private userStore: Store<{user: UserState}>,  
  ) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getUser),
      mergeMap(product =>
        this.userStore.select("user").pipe(
          map(data => {
            let cardCondition: boolean | undefined = undefined

            if(data.user) {
              const userProducts = data.userProducts.map(item => item.product_id);

              cardCondition = userProducts.findIndex(item => item === product.id!) !== -1;
            }

            return actions.getUserSuccess({user: data.user, ifInCart: cardCondition})
          })
        )),
      )
    );

    addProductToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addProductToCartChild),
      tap(data => this.userStore.dispatch(addProductToCart(data))),
      map(() => actions.addProductToCartSuccessChild({ifInCart: true}))
      )
    );

    removeProductFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.removeProductFromCartChild),
      tap(data => this.userStore.dispatch(removeProductFromCart(data))),
      map(() => actions.removeProductFromCartSuccessChild({ifInCart: false}))
      )
    );
}
