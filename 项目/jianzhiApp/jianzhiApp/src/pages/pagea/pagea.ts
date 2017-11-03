import { Component } from '@angular/core';
import {IonicPage,NavController, Slides, App, ViewController, ModalController, NavParams} from 'ionic-angular';
import {PositionService} from '../../services/position.service';

/**
 * Generated class for the PageaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagea',
  templateUrl: 'pagea.html',
})
export class PageaPage {
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
        if(item.position=='潮兼职'||item.position=='礼仪模特'){
          return item
        }
      })

        // this.items=this.all_items.slice(0,5);


    })
  }



  back(){
    this.viewCtrl.dismiss()
  }

}
