import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './module/product/product.module';

const routes: Routes = [
  {path: '', redirectTo:'/product-welcome', pathMatch:'full'},
  {path:'product-welcome',loadChildren: () => import('./module/product/product.module').then(m => m.ProductModule)},
  {path:'user-list', loadChildren:()=> import('./module/user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
