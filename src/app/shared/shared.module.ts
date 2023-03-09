import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AuthService } from '../authorization/auth.service';
import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CardSmartComponent } from './card/card-smart.component';
import { CardStoreModule } from './card/card-store.module';

@NgModule({
  declarations: [
    CardComponent,
    ListComponent,
    CardSmartComponent,
  ],
  imports: [
    CardStoreModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    ListComponent,
    CardSmartComponent
  ],
  providers: [
    ProductService
  ]
})
export class SharedModule { }
