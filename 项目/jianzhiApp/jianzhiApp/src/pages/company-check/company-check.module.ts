import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyCheckPage } from './company-check';

@NgModule({
  declarations: [
    CompanyCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyCheckPage),
  ],
})
export class CompanyCheckPageModule {}
