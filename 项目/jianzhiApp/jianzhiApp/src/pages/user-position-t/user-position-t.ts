import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController } from 'ionic-angular';
import { MePage } from '../me/me';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import {PositionService} from '../../services/position.service';

/**
 * Generated class for
 *the UserPositionTPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-position-t',
  templateUrl: 'user-position-t.html',
})
export class UserPositionTPage {

  userId:any;
  job:any;
  jobs=new Array();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              private toastCtrl:ToastController,
              private storage:Storage,
              private ps:PositionService) {

    this.storage.get('userId').then((val) => {
      this.userId= val;
      console.log(this.userId);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPositionTPage');

    this.ps.getAllPositionsUser().then(result=>{
      console.log(result);
      let that = this;
      that.job=result;
      for(let i=0;i<that.job.length;i++) {
        console.log(that.job[i].loginID);
        if (that.job[i].loginID==that.userId) {
         that.jobs.push(that.job[i]);
        }
      }
      console.log(that.jobs);
    });

  }

  back(){
    this.viewCtrl.dismiss();
  }

}
