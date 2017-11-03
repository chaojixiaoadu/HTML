/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './../index/index.component';


const routes: Routes = [

  {
    path: 'index',
    component: IndexComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
