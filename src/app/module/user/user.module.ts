import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { GetSingleUserComponent } from './get-single-user/get-single-user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserListComponent,
    GetSingleUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'user-list', component: UserListComponent}
    ])
  ]
})
export class UserModule { }
