
/**
 * Generated class for the UserResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

//导入服务
import {UsersService} from '../../services/users.service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-user-resume',
  templateUrl: 'user-resume.html',
})
export class UserResumePage {

  loginForm: FormGroup;
  username:any;
  sex:any;
  sexT:any;
  age:any;
  height:any;
  weight:any;
  place:any;
  emails:any;
  typeData:any;
  telephone:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              private formBuilder: FormBuilder,
              private userSer:UsersService,
              private storage:Storage,
              private toastCtrl:ToastController,
              ) {

    this.loginForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      sex:['',Validators.compose([Validators.required])],
      age:['',Validators.compose([Validators.required])],
      height:['',Validators.compose([Validators.required])],
      weight:['',Validators.compose([Validators.required])],
      place:['',Validators.compose([Validators.required])],
      emails:['',Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$")])],

    });
    this.username = this.loginForm.controls['name'];
    this.sex = this.loginForm.controls['sex'];
    this.age = this.loginForm.controls['age'];
    this.height = this.loginForm.controls['height'];
    this.weight = this.loginForm.controls['weight'];
    this.place = this.loginForm.controls['place'];
    this.emails = this.loginForm.controls['emails'];




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserResumePage');
    this.storage.get('userId').then((val) => {
      this.typeData= val;
    });
    this.storage.get('user_name').then((val) => {
      this.telephone= parseInt(val);
    });
  }

  back(){
    this.viewCtrl.dismiss();
  }

  addUserInfo(user){


    user.loginId=this.typeData;

    user.telephone=this.telephone;

    console.log(user);

    let ages=user.age;
    let agess=parseInt(ages);
    user.age=agess;
    console.log(user);


    this.userSer.addUserInfo(user).then((result)=>{
      if(result.stateCode===6){
        let toast = this.toastCtrl.create({
          message: '用户信息添加或修改成功',
          duration: 3000,
          position:'middle'
        });
        toast.present();

      }else{
        let toast = this.toastCtrl.create({
          message: '用户信息添加失败',
          duration: 3000,
          position:'middle'
        });
        toast.present();
      }
    })

  }


}
