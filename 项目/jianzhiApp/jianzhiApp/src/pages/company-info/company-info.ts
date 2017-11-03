import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Storage } from '@ionic/storage';
// import { CompanyService} from '../../services/company.service';
import {CompanyService} from '../../services/company.service';
/**
 * Generated class for the CompanyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-info',
  templateUrl: 'company-info.html',
})
export class CompanyInfoPage {

  loginForm: FormGroup;
  typeData:any;
  user:any;
  companyName:any;
  place:any;
  nameE:any;
  sex:any;
  company_info:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              private formBuilder: FormBuilder,
              private storage:Storage,
              private csSer:CompanyService,
              private toastCtrl:ToastController,) {

    this.storage.get('userId').then((val) => {
      this.typeData= val;
    });

    this.loginForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      companyName: ['', Validators.compose([Validators.required])],
      place: ['', Validators.compose([Validators.required])],
      nameE: ['', Validators.compose([Validators.required])],
      sex: ['', Validators.compose([Validators.required])],
      company_info: ['', Validators.compose([Validators.required])],
    });

    this.user = this.loginForm.controls['name'];
    this.companyName = this.loginForm.controls['companyName'];
    this.place = this.loginForm.controls['place'];
    this.nameE = this.loginForm.controls['nameE'];
    this.sex = this.loginForm.controls['sex'];
    this.company_info = this.loginForm.controls['company_info'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyInfoPage');
  }

  back(){
    this.viewCtrl.dismiss();
  }

  company(user){

    user.userID=this.typeData;
    console.log(user);

    this.csSer.addcompany(user).then((result)=>{
      if(result.stateCode==1){
        let toast = this.toastCtrl.create({
          message: '公司信息提交成功',
          duration: 3000,
          position:'middle'
        });
        toast.present();
        this.back()
      }else if(result.stateCode==2){
        let toast = this.toastCtrl.create({
          message: '公司信息修改成功',
          duration: 3000,
          position:'middle'
        });
        toast.present();
      }else if(result.stateCode==7){
        let toast = this.toastCtrl.create({
          message: '添加失败',
          duration: 3000,
          position:'middle'
        });
        toast.present();
      }else if(result.stateCode==8){
        let toast = this.toastCtrl.create({
          message: 'e004',
          duration: 3000,
          position:'middle'
        });
        toast.present();
      }else if(result.stateCode==10) {
        let toast = this.toastCtrl.create({
          message: '请完善信息再添加',
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      }
      else {
        let toast = this.toastCtrl.create({
          message: '操作失败',
          duration: 3000,
          position:'middle'
        });
        toast.present();
      }
    })


  }

}
