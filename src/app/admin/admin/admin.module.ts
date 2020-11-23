import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AuthComponent } from '../auth/auth.component';
import { RouterModule } from '@angular/router';
const routes = [
  {
      path     : '',
      component: AuthComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminComponent,
    AuthComponent
  ]
})
export class AdminModule { }
