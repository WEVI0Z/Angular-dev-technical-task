import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as actions from "./actions";
import { AuthService } from 'src/app/shared/auth.service';

@Injectable()
export class UserEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.login),
      mergeMap((user) =>
        this.auth.login(user.login, user.password).pipe(
          mergeMap((user) => 
            this.auth.findUserProductsById(user.id!).pipe(
              map(data => actions.loginSuccess({user: user, userProducts: data}))
            )
          )
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createUser),
      mergeMap((user) =>
        this.auth.createUser(user).pipe(
          mergeMap((user) => 
            this.auth.findUserProductsById(user.id!).pipe(
              map(data => actions.createUserSuccess({user: user, userProducts: data}))
            )
          )
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.logout),
      tap(() => this.auth.logout()),
      map(() => actions.logoutSuccess())
      )
    );

    addProductToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addProductToCart),
      mergeMap(data =>
        this.auth.addProductToCart(data.user_id, data.product_id).pipe(
          map(data => actions.addProductToCartSuccess(data))
        )
        )
      )
    );

    removeProductFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.removeProductFromCart),
      mergeMap(data =>
        this.auth.removeFromCart(data.user_id, data.product_id).pipe(
          map(data => actions.removeProductFromCartSuccess(data))
        )
        )
      )
    );

  constructor(private actions$: Actions, private auth: AuthService) {}
}
