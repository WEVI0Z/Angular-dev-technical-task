import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from '../shared/info/info.component';
import { ListSmartComponent } from './list/list-smart.component';
import { ListResolver } from './list/list-resolver.servcie';

const routes: Routes = [
    {
      path: "product/info/:id",
      component: InfoComponent,
    },
    {
      path: "product/list",
      component: ListSmartComponent,
      resolve: {
        products: ListResolver
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
