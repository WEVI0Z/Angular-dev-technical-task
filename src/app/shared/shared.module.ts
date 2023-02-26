import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AuthService } from './auth.service';
// import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    CardComponent,
    // InfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    // InfoComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
