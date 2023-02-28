import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as actions from "./actions";
import { ProductService } from 'src/app/shared/services/product.service';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private product: ProductService) {}
  
  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(actions.login),
  //     mergeMap((user) =>
  //       this.auth.login(user.login, user.password).pipe(
  //         mergeMap((user) => 
  //           this.auth.findUserProductsById(user.id!).pipe(
  //             map(data => actions.loginSuccess({user: user, userProducts: data}))
  //           )
  //         )
  //       )
  //     )
  //   )
  // );
}