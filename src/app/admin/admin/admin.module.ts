import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AuthComponent } from '../auth/auth.component';
import { RouterModule } from '@angular/router';
import { ProCategoryComponent } from '../pro-category/pro-category.component';
import { AdHeaderComponent } from '../ad-header/ad-header.component';
const routes = [
  {
      path     : '',
      component: AuthComponent
  },
  {
    path     : 'product/category',
    component: ProCategoryComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminComponent,
    AuthComponent,
    ProCategoryComponent,
    AdHeaderComponent
  ]
})
export class AdminModule { }
