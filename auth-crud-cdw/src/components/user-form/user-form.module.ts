import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserFormComponent } from './user-form';

@NgModule({
  declarations: [
    UserFormComponent,
  ],
  imports: [
    IonicModule.forRoot(UserFormComponent),
  ],
  exports: [
    UserFormComponent
  ]
})
export class UserFormComponentModule {}
