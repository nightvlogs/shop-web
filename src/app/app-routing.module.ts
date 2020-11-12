import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./home/home.module#HomeModule",
  },
  {
    path: "shop",
    loadChildren: "./shop/shop.module#ShopModule",
  },
  {
    path: "cart",
    loadChildren: "./cart/cart.module#CartModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
