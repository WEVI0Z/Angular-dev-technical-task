import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { HeaderEffects } from './store/effects';
import { HeaderSmartComponent } from './header-smart.component';
import { HeaderStoreModule } from './header-store.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSmartComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    HeaderStoreModule,
  ],
  exports: [
    HeaderSmartComponent,
  ],
  providers: [
    HeaderEffects
  ]
})
export class HeaderModule { }
