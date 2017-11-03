import { Component } from '@angular/core';
import {IonicPage,NavController, Slides, App, ViewController, ModalController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HelpdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helpd',
  templateUrl: 'helpd.html',
})
export class HelpdPage {

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpdPage');
  }
  back3(){
    this.viewCtrl.dismiss();
  }

}
