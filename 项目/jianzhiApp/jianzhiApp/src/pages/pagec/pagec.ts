import { Component } from '@angular/core';
import {IonicPage,NavController, Slides, App, ViewController, ModalController, NavParams} from 'ionic-angular';
import {PositionService} from '../../services/position.service';

/**
 * Generated class for the PagecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagec',
  templateUrl: 'pagec.html',
})
export class PagecPage {
  all_items:any;
  items:Array<{postId:string,jobname:string,duration:string,position:string,recruitNumber:string,salary:string,mode:string,workplace:string,jiesuan:string}>;
  arr:Array<{postId:string,jobname:string,duration:string,position:string,recruitNumber:string,salary:string,mode:string,workplace:string,jiesuan:string}>;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public viewCtrl: ViewController,
               public positionSer:PositionService) {
  }

  ionViewDidLoad(){
    console.log('11111111111  home.ts');
    this.positionSer.getAllPositions().then(data=>{
      this.all_items=data;
      // console.log(this.all_items);
      this.arr=this.all_items.filter((item)=> {
        if(item.position=='美工设计'||item.position=='创意策划'||item.position=='摄影摄像'||item.position=='家教助教'||item.position=='翻译'){
          return item
        }
      })
      // this.items=this.all_items.slice(0,20);
    })
  }
  back(){
    this.viewCtrl.dismiss()
  }
}
