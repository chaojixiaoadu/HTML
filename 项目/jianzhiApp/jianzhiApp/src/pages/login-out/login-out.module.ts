import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginOutPage } from './login-out';

@NgModule({
  declarations: [
    LoginOutPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginOutPage),
  ],
})
export class LoginOutPageModule {}
