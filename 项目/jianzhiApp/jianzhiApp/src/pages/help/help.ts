import { Component } from '@angular/core';
import {IonicPage,NavController, Slides, App, ViewController, ModalController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
              public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
back(){
    this.viewCtrl.dismiss()
}
}
