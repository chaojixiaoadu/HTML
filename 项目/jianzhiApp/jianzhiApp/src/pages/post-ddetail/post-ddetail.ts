import { Component,ViewChild} from '@angular/core';
import {NavController, NavParams,Slides,App,ViewController,ModalController,ToastController} from 'ionic-angular';
import {PositionService} from '../../services/position.service';
import {UsersService} from '../../services/users.service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PostDdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-post-ddetail',
  templateUrl: 'post-ddetail.html',
})
export class PostDdetailPage {
  postId:any;
  post:any;
  @ViewChild(Slides) slides:Slides;
  all_items:any;
  loginId:any;
  position:any;
  typeData:any;
  telephone:any;
  items:Array<{strartTime:string,postId:string,sex:string,gatherarea:string,jobname:string,duration:string,position:string,recruitNumber:string,salary:string,mode:string,workplace:string,jiesuan:string}>;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public positionSer:PositionService,
              private storage:Storage,
              private userSer:UsersService,
              private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PostDdetailPage');
    this.positionSer.getAllPositions().then(data=>{
      this.all_items=data;
      console.log(this.all_items);
      this.items=this.all_items.slice(0,20);
    })
    ///////////////////////////////
    this.storage.get('userId').then((val) => {
      this.typeData= val;
      this.loginId=this.typeData;
      console.log(this.typeData);
    });
    ////////////////////////////
  }
  ionViewDidEnter(){
    // this.postId=this.navParams.get('postId');
    let id=this.navParams.get('post_id');
    this.positionSer.getPositionById(id).then(post=>{
      this.post=post;
      console.log(post);
    })
  }
  back(){
    this.viewCtrl.dismiss();
  }
//////////////////////////////////
  baoming(userId) {
    console.log(userId);
    console.log(this.loginId);

    let that = this;
    this.position = [{id:userId,name:this.loginId}];
    console.log(JSON.stringify(this.position)+'报名的数据');

    that.positionSer.getApply(that.position,(result)=>{
      // alert(result.stateCode);
      if(result.stateCode==1){
        // alert('申请成功');
        let toast=this.toastCtrl.create({
          message:'报名成功！',
          duration: 3000,
          position:'middle'
        });
        toast.present();
      }else if(result.stateCode==2) {
        // alert('请登录');
        let toast=this.toastCtrl.create({
          message:'请先登录！',
          duration: 3000,
          position:'middle'
        });
        toast.present();
      }
      else if(result.stateCode==3){
        let toast=this.toastCtrl.create({
          message:'请先完善个人信息！',
          duration: 3000,
          position:'middle'
        });
        toast.present();
      }
    })
  }


}
