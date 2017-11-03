import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import {UsersService} from '../../services/users.service';
/**
 * Generated class for the RegistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regist',
  templateUrl: 'regist.html',
})
export class RegistPage {

  loginForm: FormGroup;
  username: any;
  password: any;
  passwordC:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private toastCtrl:ToastController,
              private userSer:UsersService,
  ) {

    this.loginForm = formBuilder.group({
      telephone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordC:['', Validators.compose([Validators.required])]
    });
    this.username = this.loginForm.controls['telephone'];
    this.password = this.loginForm.controls['password'];
    this.passwordC = this.loginForm.controls['passwordC']

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistPage');
  }

  back(){
    this.navCtrl.pop()
  }

  ispass(){
    if(this.password.value==this.passwordC.value){
      return false
    }else {
      return true
    }
  }

  regist(user){
    console.log(user);
    this.userSer.regist(user).then((result)=>{

      if(result.stateCode==6){
        let toast = this.toastCtrl.create({
          message: '注册成功,请登录',
          duration: 3000,
          position:'middle',
        });
        toast.present();
        this.back();
      }else if(result.stateCode==5){
        let toast = this.toastCtrl.create({
          message: '该用户已经注册',
          duration: 3000
        });
        toast.present();
      }else {
        let toast = this.toastCtrl.create({
          message: '服务器错误',
          duration: 3000
        });
        toast.present();
      }
    })
  }

}
