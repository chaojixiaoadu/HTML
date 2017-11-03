import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ActionSheetController,ToastController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import {PositionService} from '../../services/position.service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the UserAddPositionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-add-position',
  templateUrl: 'user-add-position.html',
})
export class UserAddPositionPage {

  loginForm: FormGroup;
  username:any;
  myDate:any;
  positionName:any;
  number:any;
  clearing:any;
  salarys:any;
  jiesuan:any;
  startTime:any;
  endTime:any;
  places:any;
  detail:any;
  typeData:any;
  workingTime:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public formBuilder: FormBuilder,
              public actionSheet: ActionSheetController,
              public ps:PositionService,
              private storage:Storage,
              private toastCtrl:ToastController,) {
    this.loginForm = formBuilder.group({
      positionName: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],
      clearing: ['', Validators.compose([Validators.required])],
      salarys: ['', Validators.compose([Validators.required])],
      jiesuan: ['', Validators.compose([Validators.required])],
      startTime: ['', Validators.compose([Validators.required])],
      endTime: ['', Validators.compose([Validators.required])],
      places: ['', Validators.compose([Validators.required])],
      detail: ['', Validators.compose([Validators.required])],
      workingTime: ['', Validators.compose([Validators.required])],
    });
    this.positionName = this.loginForm.controls['positionName'];
    this.number = this.loginForm.controls['number'];
    this.clearing = this.loginForm.controls['clearing'];
    this.jiesuan = this.loginForm.controls['jiesuan'];
    this.startTime = this.loginForm.controls['startTime'];
    this.endTime = this.loginForm.controls['endTime'];
    this.places = this.loginForm.controls['places'];
    this.detail = this.loginForm.controls['detail'];
    this.salarys = this.loginForm.controls['salarys'];
    this.workingTime = this.loginForm.controls['workingTime'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddPositionPage');
    this.storage.get('userId').then((val) => {
      this.typeData= val;
    });
  }

  back(){
    this.viewCtrl.dismiss();
  }


  addPosition(position){

    position.userID=this.typeData;

    let numbers=parseInt(position.number);
    position.numbers=numbers;
    let clearings=parseInt(position.clearing);
    position.clearings=clearings;
    let salary=parseInt(position.salarys);
    position.salary=salary;
    let jiesuans=parseInt(position.jiesuan);
    position.jiesuans=jiesuans;

    console.log(position);

    this.ps.postJob(position).then((result)=> {
      if(result.stateCode==6){
        let toast = this.toastCtrl.create({
          message: '发布成功',
          duration: 3000,
          position:'middle'
        });
        toast.present();
        // location.reload();
        // alert('发布成功');
      }else if(result.stateCode==9) {
        let toast = this.toastCtrl.create({
          message: '请先完善公司信息',
          duration: 3000,
          position:'middle'
        });
        toast.present();
        // alert('请先完善公司信息');
      }else if(result.stateCode==7) {
        let toast = this.toastCtrl.create({
          message: '请登录',
          duration: 3000,
          position:'middle'
        });
        toast.present();
        // alert('请登录');
      }else if(result.stateCode==5||result.stateCode==0) {
        let toast = this.toastCtrl.create({
          message: '职位发布失败',
          duration: 3000,
          position:'middle'
        });
        toast.present();
        // alert('职位发布失败');
      }
      else {
        let toast = this.toastCtrl.create({
          message: 'e004',
          duration: 3000,
          position:'middle'
        });
        toast.present();
        // alert('e004');
      }
    })

  }


}
