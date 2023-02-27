import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
// import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
  ],
  providers: [
    AuthService,
    ProductService
  ]
})
export class SharedModule { }
