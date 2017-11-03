import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SettingPage } from '../setting/setting';
import {UsersService} from '../../services/users.service';

/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
  providers:[UsersService]
})
export class PersonalPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userSer:UsersService,
    public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }
  back(){
    this.viewCtrl.dismiss();
    this.navCtrl.push(TabsPage);
  }

  toSetting(){
    this.navCtrl.push(SettingPage);
  }
  // showAllUsers(){
  //   this.userSer.getAllUsers().then((data) => {
  //     console.log(data)
  //   })
  // }
}
