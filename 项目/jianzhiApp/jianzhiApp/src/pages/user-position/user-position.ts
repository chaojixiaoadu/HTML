
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
// import { UserPositionTPage } from '../user-position-t/user-position-t';
/**
 * Generated class for the UserPositionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-position',
  templateUrl: 'user-position.html',
})
export class UserPositionPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPositionPage');
  }



}
