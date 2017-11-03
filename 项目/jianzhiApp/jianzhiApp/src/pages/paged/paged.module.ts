import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagedPage } from './paged';

@NgModule({
  declarations: [
    PagedPage,
  ],
  imports: [
    IonicPageModule.forChild(PagedPage),
  ],
})
export class PagedPageModule {}
