import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authorization/guards/auth.guard';
import { ListResolver } from './list/list-resolver.servcie';

const routes: Routes = [
  {
    path: "goods/list",
    canActivate: [AuthGuard],
    loadChildren: () => import("./list/list.module").then(m => m.ListModule),
    resolve: {goods: ListResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
