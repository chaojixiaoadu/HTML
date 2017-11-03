import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController,AlertController,App, ViewController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import { Storage } from '@ionic/storage';
import {UsersService} from '../../services/users.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegistPage } from '../regist/regist';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  username: any;
  password: any;
  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl:ToastController,
              private viewCtrl:ViewController,
              private appCtrl: App,
              private storage:Storage,
              private userSer:UsersService,
              private formBuilder: FormBuilder) {

              this.loginForm = formBuilder.group({
                telephone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
                password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
              });
              this.username = this.loginForm.controls['telephone'];
              this.password = this.loginForm.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user){
    console.log(user);
    this.userSer.login(user).then((result)=> {
          if(result){
            console.log(result);
            if(result.stateCode===1){
              console.log(result.userId);
              this.storage.ready().then(()=>{
                this.storage.set('userId',result.userId);
                this.storage.set('user_name',result.user_name);
                this.storage.set('token',result.token);
              });
              this.navCtrl.push(TabsPage);

            }else if(result.stateCode===3){
              let toast = this.toastCtrl.create({
                message: '该用户不存在',
                duration: 3000
              });
              toast.present();
            }
            else {
              let toast = this.toastCtrl.create({
                message: '用户名或密码错误',
                duration: 3000
              });
              toast.present();
            }
          }else{
            let toast = this.toastCtrl.create({
              message: '服务器异常',
              duration: 3000
            });
            toast.present();
          }
        })
      }

  to_regist(){
    this.navCtrl.push(RegistPage);
  }

}
