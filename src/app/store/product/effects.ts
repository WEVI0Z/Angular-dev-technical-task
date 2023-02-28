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
}