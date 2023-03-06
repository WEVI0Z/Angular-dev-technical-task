import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { headerReducer } from './store/reducer';
import { HeaderEffects } from './store/effects';
import { HeaderSmartComponent } from './header-smart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSmartComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature("userHeader", headerReducer),
    EffectsModule.forFeature([HeaderEffects]),
  ],
  exports: [
    HeaderSmartComponent,
  ],
  providers: [
    HeaderEffects
  ]
})
export class HeaderModule { }
