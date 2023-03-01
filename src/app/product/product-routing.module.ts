import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from '../shared/info/info.component';
import { listSmartComponent } from './list/list.smart.component';

const routes: Routes = [
    {
      path: "product/info/:id",
      component: InfoComponent,
    },
    {
      path: "product/list",
      component: listSmartComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
