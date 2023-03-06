import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { headerReducer } from './store/reducer';
import { HeaderEffects } from './store/effects';

@NgModule({
  imports: [
    StoreModule.forFeature("userHeader", headerReducer),
    EffectsModule.forFeature([HeaderEffects]),
  ]
})
export class HeaderStoreModule {}
