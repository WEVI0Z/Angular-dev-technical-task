import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
// import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    RouterModule,
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
