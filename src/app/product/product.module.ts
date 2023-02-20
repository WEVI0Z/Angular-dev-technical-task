import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    ListComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
