import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/reducer';
import { ProductEffects } from './store/effects';

@NgModule({
  imports: [
    StoreModule.forFeature("productsChild", productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ]
})
export class ProductStoreModule {}
