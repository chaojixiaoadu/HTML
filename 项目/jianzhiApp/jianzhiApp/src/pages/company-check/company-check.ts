import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {CompanyCheckService}from '../../services/company_check.service';
/**
 * Generated class for the CompanyCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-company-check',
  templateUrl: 'company-check.html',
})
export class CompanyCheckPage {
  userId:any;
  userID:any;
  companys:any = [];
  applyId:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              private storage:Storage,
              private cs:CompanyCheckService,
              public toastCtrl:ToastController) {

    this.storage.get('userId').then((val) => {
      this.userId= val;
      console.log(this.userId);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyCheckPage');

    this.getAllCompanys();

    // console.log(this.companys);
  }

  getAllCompanys(){
    this.companys = [];
    this.storage.ready().then(()=>{
      this.storage.get('userId').then((val) => {
        this.userId= val;
        this.userID={id:this.userId};
        console.log(this.userID);
        this.cs.getAllCompanys(this.userID).then((result)=> {
          // this.companys=result;
          console.log(result);
          for(let i of result){
            if(i.status == '待审核'){
              this.companys.push(i);
            }
          }
          console.log(this.companys);

        })
      });
    })
  }

  back(){
    this.viewCtrl.dismiss();
  }

  updata(index){
    let that=this;
    console.log(that.companys);

    that.applyId=that.companys[index].applyID;
    console.log(that.applyId);

    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/company/updata',
      data: {"applyId": that.applyId},
      dataType:"json",
      success: function (result) {
        // alert('ok');
        if (result== 1) {
          // alert('修改成功');
          that.getAllCompanys();
          let toast=that.toastCtrl.create({
            message:'修改成功！',
            duration: 2000,
            position:'middle'
          });
          toast.present();
        }else {
          // alert('修改失败');
          let toast=that.toastCtrl.create({
            message:'修改失败！',
            duration: 2000,
            position:'middle'
          });
          toast.present();
        }
      },
      error: function (err) {
        // alert('error');
        let toast=that.toastCtrl.create({
          message:'error！',
          duration: 2000,
          position:'middle'
        });
        toast.present();
      }
    });
  }

  updatas(i){
    let that=this;
    console.log(that.companys);

    that.applyId=that.companys[i].applyID;
    console.log(that.applyId);

    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/company/updatas',
      data: {"applyId": that.applyId},
      dataType:"json",
      success: function (result) {
        // alert('ok');
        if (result == 1) {
          location.reload();
          // alert('已拒绝修改成功');
          let toast=that.toastCtrl.create({
            message:'已拒绝修改成功！',
            duration: 2000,
            position:'middle'
          });
          toast.present();
        }else {
          // alert('修改失败');
          let toast=that.toastCtrl.create({
            message:'修改失败！',
            duration: 2000,
            position:'middle'
          });
          toast.present();
        }
      },
      error: function (err) {
        // alert('error');
        let toast=that.toastCtrl.create({
          message:'error！',
          duration: 2000,
          position:'middle'
        });
        toast.present();
      }
    });

  }

}
