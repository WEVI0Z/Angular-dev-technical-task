import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/reducer';
import { UserEffects } from './store/user/effects';
import { productReducer } from './store/product/reducer';
import { ProductEffects } from './store/product/effects';

@NgModule({
  imports: [
    StoreModule.forRoot({user: userReducer, products: productReducer}),
    EffectsModule.forRoot([UserEffects, ProductEffects]),
  ],
})
export class AppStoreModule { }
