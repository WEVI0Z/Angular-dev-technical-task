import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
    {
      path: "product/info",
      component: InfoComponent,
      canActivate: [AuthGuard],
    },
    {
      path: "product/list",
      component: ListComponent,
      canActivate: [AuthGuard],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
