import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductModule } from './module/product/product.module';
import { SignalComponentComponent } from './component/signal-component/signal-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-welcome', pathMatch: 'full' },
  {
    path: 'product-welcome',
    loadChildren: () =>
      import('./module/product/product.module').then((a) => a.ProductModule),
  //  data: { preload: true } //load only specific module
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./module/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'signal', component:SignalComponentComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})], //preload all feature module 
 // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
