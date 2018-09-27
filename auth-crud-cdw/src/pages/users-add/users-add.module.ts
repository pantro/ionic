import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { UsersAddPage } from './users-add';

@NgModule({
  declarations: [
    UsersAddPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersAddPage),
  ],
  exports: [
    UsersAddPage
  ]
})
export class UsersAddPageModule {}
