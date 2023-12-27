import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { GetSingleUserComponent } from './get-single-user/get-single-user.component';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    UserListComponent,
    GetSingleUserComponent
  ],
  imports: [
    RouterModule.forChild([
      //{path: 'user-list', component: UserListComponent}
      {path: '', component: UserListComponent}
    ]),
    AppSharedModule,
    CommonModule
  ]
})
export class UserModule { }
