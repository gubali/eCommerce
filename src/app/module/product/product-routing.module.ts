import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductWelcomeComponent } from './product-welcome/product-welcome.component';
import { ProductGallaryComponent } from './product-gallary/product-gallary.component';
import { GetProductByLimitComponent } from './get-product-by-limit/get-product-by-limit.component';
import { GetSingleProductComponent } from './get-single-product/get-single-product.component';

const route: Routes = [
  {
    // path: 'product-welcome',
    path: '',
    component: ProductWelcomeComponent,
    children: [
      { path: '', component: ProductGallaryComponent, pathMatch:'full' },
      { path: 'product-by-limit', component: GetProductByLimitComponent },
      { path: 'product-by-singal', component: GetSingleProductComponent },
    ],
  },
];

@NgModule({
   imports: [RouterModule.forChild(route)],
   exports:[RouterModule]
})
export class ProductRoutingModule {}
