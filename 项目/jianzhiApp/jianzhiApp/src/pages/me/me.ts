import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { UserPositionTPage } from '../user-position-t/user-position-t';
import { UserResumePage } from '../user-resume/user-resume';
import { UserAddPositionPage } from '../user-add-position/user-add-position';
import { LoginOutPage } from '../login-out/login-out';
import { LoginPage } from '../login/login';
import { CompanyInfoPage } from '../company-info/company-info';
import { CompanyCheckPage } from '../company-check/company-check';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  showNavs: boolean=true;
  userName:any;
  loginId:any;
  typeData:any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage:Storage,
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MePage');
    ////////////////////////
    this.storage.get('user_name').then((val) => {
      this.typeData= val;
      this.userName=this.typeData;
      console.log(this.typeData);
      //this.hiddenNavs = Boolean(this.storage.get("user_name"));
      if( Boolean(this.storage.get("user_name"))) {
        this.showNavs = false;
      }
    ////////////////////////
  });
  }

  to_userPosition(){
    let modelPage=this.modalCtrl.create(UserPositionTPage);
    modelPage.present();
  }
  to_userResume(){
    let modelPage=this.modalCtrl.create(UserResumePage);
    modelPage.present();
  }
  to_userAddPosition(){
    let modelPage=this.modalCtrl.create(UserAddPositionPage);
    modelPage.present();
  }
  to_login_out(){
    this.showNavs=true;
    let modelPage=this.modalCtrl.create(LoginOutPage);
    modelPage.present();
  }
  to_login(){
    this.showNavs = false;
    let modelPage=this.modalCtrl.create(LoginPage);
  modelPage.present();
}
  to_company(){
    let modelPage=this.modalCtrl.create(CompanyInfoPage);
    modelPage.present();
  }
  to_company_check(){
    let modelPage=this.modalCtrl.create(CompanyCheckPage);
    modelPage.present();
  }


}
