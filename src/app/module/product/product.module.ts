import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductWelcomeComponent } from './product-welcome/product-welcome.component';
import { GetSingleProductComponent } from './get-single-product/get-single-product.component';
import { GetProductByLimitComponent } from './get-product-by-limit/get-product-by-limit.component';
import { ProductGallaryComponent } from './product-gallary/product-gallary.component';
//import { BrowserModule } from '@angular/platform-browser';
import { ProductRoutingModule } from './product-routing.module';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProductWelcomeComponent,
    GetSingleProductComponent,
    GetProductByLimitComponent,
    ProductGallaryComponent
  ],
  imports: [
    RouterModule,
    //BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    AppSharedModule,
    CommonModule
    
  ],
  exports:[
    // GetSingleProductComponent,
    // //ProductWelcomeComponent,
    // GetProductByLimitComponent,
    // ProductGallaryComponent
  ]
})
export class ProductModule { }
