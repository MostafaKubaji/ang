import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-management/product-list/product-list.component';
import { AddUpdateProductComponent } from './product-management/add-update-product/add-update-product.component';

const routes: Routes = [
  {
    path: 'productslist',
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: 'addproduct',
    component: AddUpdateProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'updateproduct/:id',
    component: AddUpdateProductComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
