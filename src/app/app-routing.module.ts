import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./web/home/home.module#HomeModule",
  },
  {
    path: "shop",
    loadChildren: "./web/shop/shop.module#ShopModule",
  },
  {
    path: "cart",
    loadChildren: "./web/cart/cart.module#CartModule",
  },
  {
    path: "blog",
    loadChildren: "./web/blog/blog.module#BlogModule",
  },
  {
    path: "auth",
    loadChildren: "./web/auth/auth.module#AuthModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
