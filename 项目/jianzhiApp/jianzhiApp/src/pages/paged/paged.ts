import { Component } from '@angular/core';
import {IonicPage,NavController, Slides, App, ViewController, ModalController, NavParams} from 'ionic-angular';
import {PositionService} from '../../services/position.service';

/**
 * Generated class for the PagedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paged',
  templateUrl: 'paged.html',
})
export class PagedPage {
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
        if(item.position=='实习生'||item.position=='文员'||item.position=='展会协助'){
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
