import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducer';
import { UserEffects } from './store/effects';

@NgModule({
  imports: [
    StoreModule.forFeature("user", userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserStoreModule { }
