import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';
import { CategoryeditComponent } from './categoryedit/categoryedit.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { WebapiComponent } from './webapi/webapi.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'product',
    component: ProductComponent,children:[
      {
        path:'',
        component:ProductlistComponent
      },
      {
        path:'add',
        component:ProductaddComponent
      },
      {
        path:'edit/:id',
        component:ProducteditComponent
      }
    ]
  },
  {
    path:'category',
    component: CategoryComponent,children:[
      {
        path:'',
        component:CategorylistComponent
      },
      {
        path:'add',
        component:CategoryaddComponent
      },
      {
        path:'edit/:id',
        component:CategoryeditComponent
      },
    ]
  },
  {
    path:'webapi',
    component: WebapiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
