import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSmartComponent } from './list-smart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ListResolver } from './list-resolver.servcie';

const routes: Routes = [
    {
      path: "",
      component: ListSmartComponent,
      resolve: {
        products: ListResolver
      }
    }
];

@NgModule({
  declarations: [
    ListSmartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListModule { }
