import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import * as actions from "./actions";
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user/reducer';
import * as userActions from '../../store/user/actions';

@Injectable()
export class HeaderEffects {
  constructor(
    private actions$: Actions,
    private userStore: Store<{user: UserState}>,  
  ) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getUser),
      mergeMap(() =>
        this.userStore.select("user").pipe(
          map(data => actions.getUserSuccess({isUser: !!data.user}))
        )),
      )
    );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.childLogout),
      tap(() => this.userStore.dispatch(userActions.logout())),
      map(() => actions.childLogoutSuccess())
      )
    );
}
