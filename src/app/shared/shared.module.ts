import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CardSmartComponent } from './card/card.smart.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSmartComponent } from './header/header-smart.component';

@NgModule({
  declarations: [
    CardComponent,
    ListComponent,
    CardSmartComponent,
    HeaderComponent,
    HeaderSmartComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    ListComponent,
    CardSmartComponent,
    HeaderSmartComponent
  ],
  providers: [
    ProductService
  ]
})
export class SharedModule { }
