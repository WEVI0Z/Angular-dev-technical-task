import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsRoutingModule } from './goods-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListModule } from './list/list.module';
import { InfoModule } from '../product/info/info.module';

@NgModule({
  imports: [
    ListModule,
    InfoModule,
    CommonModule,
    SharedModule,
    GoodsRoutingModule
  ],
})
export class GoodsModule { }
