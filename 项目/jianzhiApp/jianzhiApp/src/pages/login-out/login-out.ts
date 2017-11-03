import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
// import { MePage } from '../me/me';

import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-out',
  templateUrl: 'login-out.html',
})
export class LoginOutPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public modalCtrl:ModalController,
              public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOutPage');
  }

  back(){
    this.viewCtrl.dismiss();
  }

  login_out(){
    this.storage.remove('userId');
    this.storage.remove('user_name');
    this.storage.remove('token');
    this.back();
  }

}
