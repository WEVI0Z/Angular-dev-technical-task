import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { InfoComponent } from '../shared/info/info.component';

const routes: Routes = [
    {
      path: "product/info/:id",
      component: InfoComponent,
    },
    {
      path: "product/list",
      component: ListComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
