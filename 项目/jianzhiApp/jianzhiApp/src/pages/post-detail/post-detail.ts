import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {PositionService} from '../../services/position.service';


/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
  providers:[PositionService]
})
export class PostDetailPage {
  // postid:string;
  // post:any;
  postId:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public positionSer:PositionService) {
  }

  ionViewDidEnter(){
    // let id=this.navParams.get('post_id');
    // this.positionSer.getPositionById(id).then(post=>{
    //   this.post=post;
    //   console.log(post);
    // })
    this.postId=this.navParams.get('postId');
    console.log(this.postId+'这儿')

  }
  back(){
    this.viewCtrl.dismiss();
    // this.navCtrl.pop();
    // this.navCtrl.push(TabsPage);
    // this.viewCtrl.dismiss({"newName":"lzhan"});

  }

  closeView(){
    this.viewCtrl.dismiss();
  }

  ionViewWillLeave(){
    console.log('detail----444444444');
  }
}
