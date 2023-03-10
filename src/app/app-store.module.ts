import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user/store/reducer';
import { UserEffects } from './user/store/effects';

@NgModule({
  imports: [
    StoreModule.forRoot({user: userReducer}),
    EffectsModule.forRoot([UserEffects]),
  ],
})
export class AppStoreModule { }
