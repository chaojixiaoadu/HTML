import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPositionPage } from './user-position';

@NgModule({
  declarations: [
    UserPositionPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPositionPage),
  ],
})
export class UserPositionPageModule {}
