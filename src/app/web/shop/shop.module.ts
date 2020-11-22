import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
const routes = [
  {
      path     : '',
      component: ShopComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule { }
