import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

const routes = [
  {
      path     : '',
      component: BlogComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
