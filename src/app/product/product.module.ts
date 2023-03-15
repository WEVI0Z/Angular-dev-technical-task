import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListModule } from './list/list.module';
import { InfoModule } from './info/info.module';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [
    InfoModule,
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ListModule,
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
