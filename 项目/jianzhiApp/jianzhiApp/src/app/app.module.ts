import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MePage} from '../pages/me/me';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {PersonalPage} from '../pages/personal/personal';
import {SettingPage} from '../pages/setting/setting';
import {HelpPage} from '../pages/help/help';
import {HelpbPage} from '../pages/helpb/helpb';
import {HelpcPage} from '../pages/helpc/helpc';
import {HelpdPage} from '../pages/helpd/helpd';
import {PageaPage} from '../pages/pagea/pagea';
import {PagebPage} from '../pages/pageb/pageb';
import {PagecPage} from '../pages/pagec/pagec';
import {PagedPage} from '../pages/paged/paged';

////////////////////
import { UserPositionPage } from '../pages/user-position/user-position';
import { UserPositionTPage } from '../pages/user-position-t/user-position-t';
import { UserResumePage } from '../pages/user-resume/user-resume';
import { UserAddPositionPage } from '../pages/user-add-position/user-add-position';
import { LoginOutPage } from '../pages/login-out/login-out';
import { PostDdetailPage } from '../pages/post-ddetail/post-ddetail';
import { RegistPage } from '../pages/regist/regist';
import { GongsishenhePage } from '../pages/gongsishenhe/gongsishenhe';
import { ZhiweiguanliPage } from '../pages/zhiweiguanli/zhiweiguanli';
import {CompanyInfoPage} from '../pages/company-info/company-info'
import {CompanyCheckPage} from '../pages/company-check/company-check'



import { IonicStorageModule } from '@ionic/storage';

import {HttpClientModule} from '@angular/common/http';
import {PositionService} from '../services/position.service';
import {UsersService}from '../services/users.service';
import {CompanyService}from '../services/company.service';
import {CompanyCheckService}from '../services/company_check.service';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    LoginPage,
    PersonalPage,
    SettingPage,
    HelpPage,
    HelpbPage,
    HelpcPage,
    HelpdPage,
    UserPositionPage,
    UserPositionTPage,
    UserResumePage,
    UserAddPositionPage,
    LoginOutPage,
    PostDdetailPage,
    PageaPage,
    PagebPage,
    PagecPage,
    PagedPage,
    RegistPage,
    GongsishenhePage,
    ZhiweiguanliPage,
    CompanyInfoPage,
    CompanyCheckPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    LoginPage,
    PersonalPage,
    SettingPage,
    HelpPage,
    HelpbPage,
    HelpcPage,
    HelpdPage,
    UserPositionPage,
    UserPositionTPage,
    UserResumePage,
    UserAddPositionPage,
    LoginOutPage,
    PostDdetailPage,
    PageaPage,
    PagebPage,
    PagecPage,
    PagedPage,
    RegistPage,
    GongsishenhePage,
    ZhiweiguanliPage,
    CompanyInfoPage,
    CompanyCheckPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService,
    PositionService,
    CompanyService,
    CompanyCheckService
  ]
})
export class AppModule {}
