import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserResumePage } from './user-resume';

@NgModule({
  declarations: [
    UserResumePage,
  ],
  imports: [
    IonicPageModule.forChild(UserResumePage),
  ],
})
export class UserResumePageModule {}
