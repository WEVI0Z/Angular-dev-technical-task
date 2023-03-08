import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsRoutingModule } from './goods-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListSmartComponent } from './list/list.smart.component';
import { GoodsStoreModule } from './goods-store.module';

@NgModule({
  declarations: [
    ListSmartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoodsStoreModule,
    GoodsRoutingModule
  ],
})
export class GoodsModule { }
