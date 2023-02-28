import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as actions from "./actions";
import { ProductService } from 'src/app/shared/services/product.service';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private product: ProductService) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getProducts),
      mergeMap(() => 
        this.product.getProducts().pipe(
          map(products => actions.getProductsSuccess({products}))
        )
      )
    )
  )

  getProduct$ = createEffect(() => 
    this.actions$.pipe(
      ofType(actions.getProduct),
      mergeMap(data => 
        this.product.getProduct(data.id).pipe(
          map(() => actions.getProductSuccess())
        )
      )
    )
  )
  
  getProductsOfUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getProductsOfUserById),
      mergeMap(data =>
        this.product.getProductsOfUserById(data.user_id).pipe(
          map(products => actions.getProductsOfUserByIdSuccess({products}))
        )  
      )
    )
  )

  checkIfInCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.checkIfInCart),
      mergeMap(data =>
        this.product.checkIfInCart(data.product_id, data.user_id).pipe(
          map(bool => actions.checkIfInCartSuccess({bool}))
        )
      )
    )
  )
}