import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
      path: "user/login",
      loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
    },
    {
      path: "user/register",
      loadChildren: () => import("./register/register.module").then(m => m.RegisterModule),
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
