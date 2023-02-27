import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
    {
      path: "goods/list",
      component: ListComponent,
      // canActivate: [AuthGuard],
    },
    {
      path: "goods/add",
      component: AddComponent,
      canActivate: [AuthGuard],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
