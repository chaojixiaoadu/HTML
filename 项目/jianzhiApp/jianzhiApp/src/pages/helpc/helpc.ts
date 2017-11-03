import { Component } from '@angular/core';
 import {IonicPage,NavController, Slides, App, ViewController, ModalController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HelpcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helpc',
  templateUrl: 'helpc.html',
})
export class HelpcPage {

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpcPage');
  }
  back2(){
    this.viewCtrl.dismiss();
  }

}
