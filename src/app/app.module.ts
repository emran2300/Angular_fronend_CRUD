import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { WebapiComponent } from './webapi/webapi.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryeditComponent } from './categoryedit/categoryedit.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    WebapiComponent,
    ProductlistComponent,
    ProductaddComponent,
    CategorylistComponent,
    CategoryaddComponent,
    CategoryeditComponent,
    ProducteditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
