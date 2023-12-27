import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [CheckboxModule],
  exports: [CheckboxModule,LoadingSpinnerComponent],
})
export class AppSharedModule {}
