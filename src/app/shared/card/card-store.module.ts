import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from './store/reducer';
import { CardEffects } from './store/effects';

@NgModule({
  imports: [
    StoreModule.forFeature("card", cardReducer),
    EffectsModule.forFeature([CardEffects]),
  ]
})
export class CardStoreModule {}
