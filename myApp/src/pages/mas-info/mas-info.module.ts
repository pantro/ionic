import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasInfoPage } from './mas-info';

@NgModule({
  declarations: [
    MasInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MasInfoPage),
  ],
})
export class MasInfoPageModule {}
