import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CardSmartComponent } from './card/card.smart.component';

@NgModule({
  declarations: [
    CardComponent,
    ListComponent,
    CardSmartComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    ListComponent,
    CardSmartComponent
  ],
  providers: [
    AuthService,
    ProductService
  ]
})
export class SharedModule { }
