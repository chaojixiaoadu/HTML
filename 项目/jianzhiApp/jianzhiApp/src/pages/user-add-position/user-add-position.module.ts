import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAddPositionPage } from './user-add-position';

@NgModule({
  declarations: [
    UserAddPositionPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAddPositionPage),
  ],
})
export class UserAddPositionPageModule {}
