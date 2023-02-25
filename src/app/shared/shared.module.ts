import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
