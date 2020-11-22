import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ProducFeaturedComponent } from './produc-featured/produc-featured.component';
import { BannerWrappComponent } from './banner-wrapp/banner-wrapp.component';
import { ClericTabsComponent } from './cleric-tabs/cleric-tabs.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
const routes = [
  {
      path     : '',
      component: HomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterModule,
    HeaderModule
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    ProducFeaturedComponent,
    BannerWrappComponent,
    ClericTabsComponent
  ]
})
export class HomeModule { }
