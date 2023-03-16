import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "product",
    loadChildren: () => import("./product/product.module").then(m => m.ProductModule),
  },
  {
    path: "goods",
    loadChildren: () => import("./goods/goods.module").then(m => m.GoodsModule),
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "product/list"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
