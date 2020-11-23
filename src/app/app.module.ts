import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './web/home/home.module';
import { HeaderModule } from './web/header/header.module';
import { FooterModule } from './web/footer/footer.module';
import { ShopModule } from './web/shop/shop.module';
import { CartModule } from './web/cart/cart.module';
import { BlogModule } from './web/blog/blog.module';
import { AuthModule } from './web/auth/auth.module';
import { AdminModule } from './admin/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    ShopModule,
    CartModule,
    BlogModule,
    AuthModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
