import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsRoutingModule } from './goods-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListSmartComponent } from './list/list-smart.component';

@NgModule({
  declarations: [
    ListSmartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoodsRoutingModule
  ],
})
export class GoodsModule { }
