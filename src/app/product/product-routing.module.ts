import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "product/list",
    loadChildren: () => import("./list/list.module").then(m => m.ListModule),
  },
  {
    path: "product/info/:id",
    loadChildren: () => import("./info/info.module").then(m => m.InfoModule),
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
