import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ProducFeaturedComponent } from './produc-featured/produc-featured.component';
import { BannerWrappComponent } from './banner-wrapp/banner-wrapp.component';
const routes = [
  {
      path     : '',
      component: HomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    ProducFeaturedComponent,
    BannerWrappComponent
  ]
})
export class HomeModule { }
