import { Component } from '@angular/core';
import {IonicPage,NavController, Slides, App, ViewController, ModalController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HelpbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helpb',
  templateUrl: 'helpb.html',
})
export class HelpbPage {

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpbPage');
  }
  back1(){
    this.viewCtrl.dismiss();
  }
}
