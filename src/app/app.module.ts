import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUpdateProductComponent } from './product-management/add-update-product/add-update-product.component';
import { ProductListComponent } from './product-management/product-list/product-list.component';
import { AddCategoryComponent } from './category-management/add-category/add-category.component';
import { CategoryListComponent } from './category-management/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUpdateProductComponent,
    ProductListComponent,
    AddCategoryComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
