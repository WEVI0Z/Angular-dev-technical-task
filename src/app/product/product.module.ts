import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListSmartComponent } from './list/list.smart.component';
import { ProductStoreModule } from './product-store.module';

@NgModule({
  declarations: [
    ListSmartComponent
  ],
  imports: [
    CommonModule,
    ProductStoreModule,
    ProductRoutingModule,
    SharedModule
  ],
})
export class ProductModule { }
