import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ListResolver } from './list/list-resolver.servcie';
import { ListSmartComponent } from './list/list-smart.component';

const routes: Routes = [
    {
      path: "goods/list",
      component: ListSmartComponent,
      canActivate: [AuthGuard],
      resolve: {
        goods: ListResolver,
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
