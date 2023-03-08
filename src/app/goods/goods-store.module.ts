import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { goodsReducer } from './store/reducer';
import { GoodsEffects } from './store/effects';

@NgModule({
  imports: [
    StoreModule.forFeature("goods", goodsReducer),
    EffectsModule.forFeature([GoodsEffects]),
  ]
})
export class GoodsStoreModule {}
