import { Component } from '@angular/core';
import {IonicPage,NavController, Slides, App, ViewController, ModalController, NavParams} from 'ionic-angular';
import {PositionService} from '../../services/position.service';

/**
 * Generated class for the PagebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pageb',
  templateUrl: 'pageb.html',
})
export class PagebPage {
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
      console.log(this.all_items);
      this.arr=this.all_items.filter((item)=> {
        if(item.mode=='小时结'||item.mode=='日结'){
          return item
        }
      })

    })
  }
  back(){
    this.viewCtrl.dismiss()
  }
}
