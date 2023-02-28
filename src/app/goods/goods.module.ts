import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { GoodsRoutingModule } from './goods-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoodsRoutingModule
  ],
})
export class GoodsModule { }
