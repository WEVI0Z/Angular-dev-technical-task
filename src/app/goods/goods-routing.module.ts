import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authorization/guards/auth.guard';
import { ListResolver } from './list/list-resolver.servcie';
import { ListSmartComponent } from './list/list-smart.component';

const routes: Routes = [
  {
    path: "goods/list",
    loadChildren: () => import("./list/list.module").then(m => m.ListModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
