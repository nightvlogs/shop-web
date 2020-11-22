import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderModule } from '../header/header.module';
const routes = [
  {
      path     : '',
      component: CartComponent
  },
  {
    path     : 'checkout',
    component: CheckoutComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  declarations: [
    CartComponent,
    CheckoutComponent
  ]
})
export class CartModule { }
