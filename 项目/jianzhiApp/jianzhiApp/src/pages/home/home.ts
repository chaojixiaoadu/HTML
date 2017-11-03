import {Component, ViewChild} from '@angular/core';
import {NavController, Slides,App,ViewController,ModalController} from 'ionic-angular';
import { PostDdetailPage } from '../post-ddetail/post-ddetail';
import {PositionService} from '../../services/position.service';
import {PageaPage} from "../pagea/pagea";
import {PagebPage} from "../pageb/pageb";
import {PagecPage} from "../pagec/pagec";
import {PagedPage} from "../paged/paged";

declare var $:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 @ViewChild(Slides) myslides:Slides;





 imgs=[
   {
     'img':'0001.png',
     'links':'www.baidu.com'
   },
   {
     'img':'0002.jpg',
     'links':'www.baidu.com'
   },
   {
     'img':'0003.jpg',
     'links':'www.baidu.com'
   },
   {
     'img':'0004.jpg',
     'links':'www.baidu.com'
   }
 ];
  // items: any;
  all_items:any;
  @ViewChild(Slides) slides:Slides;
  arr:Array<{postId:string,sex:string,jobname:string,duration:string,position:string,recruitNumber:string,salary:string,mode:string,workplace:string,jiesuan:string}>;
  items:Array<{postId:string,sex:string,jobname:string,duration:string,position:string,recruitNumber:string,salary:string,mode:string,workplace:string,jiesuan:string}>;
  constructor(
              private navCtrl: NavController,
              public viewCtrl: ViewController,
              public appCtrl: App,
              public modalCtrl: ModalController,
              public modal:ModalController,
              public positionSer:PositionService
  ) {

  }

  ionViewDidLoad(){
    console.log('11111111111  home.ts');
    this.positionSer.getAllPositions().then(data=>{
      this.all_items=data;
      console.log(this.all_items);
       this.items=this.all_items.slice(0,20);
      this.arr=this.all_items.slice(0,20);
    })


  }

  ionViewWillEnter(){
    console.log('2222222222');
  }

  ionViewDidEnter(){
    // $("#content").css({border:"6px solid #ff0000"})
    // $("#content").scroll(function(){
    //   console.log("a-------------");
    // });
  }
  ionViewWillLeave(){
    console.log('444444444');
  }
  slideChanged(){
 // let activeIndex=this.myslides.getActiveIndex();
    // console.log(activeIndex);
    this.myslides.startAutoplay();
  }
  showImg(img){
    // console.log(img);
    this.myslides.startAutoplay();
  }
  itemSelected(item){
    // item&&console.log(item.postId);
    // this.viewCtrl.dismiss();
    // item && this.navCtrl.push(PostDetailPage,{"post_id":item.postId});
    // this.appCtrl.getRootNav().push(PostDetailPage);

    let modelPage=this.modalCtrl.create(PostDdetailPage,{"post_id":item.ID});
    // modelPage.onDidDismiss(data => {
    //   console.log(data);
    // });
    modelPage.present();
  }
  // deleteById(id){
  //   for(let i=0;i<this.items.length;i++){
  //     if(id===this.items[i].postId){
  //       this.items.splice(i,1);
  //     }
  //   }
  // }

  onInput(){

}


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

       setTimeout(() => {

         var i=5;
         var j=i++;
       console.log(this.arr);
      this.arr.unshift(this.arr[j]);
        refresher.complete();
    }, 2000);
   }

  // doInfinite(infiniteScroll) {
  //
  //
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       var i = 5;
  //       var j = i++;
  //       console.log(this.arr);
  //       this.arr.unshift(this.arr[j]);
  //       infiniteScroll.enable(false);
  //       resolve();
  //     }, 2000);
  //   })
  //
  //  }
  itemSelected7() {
    let modalPage=this.modal.create(PageaPage);
    modalPage.present();

  }
  itemSelected8() {
    let modalPage=this.modal.create(PagebPage);
    modalPage.present();

  }
  itemSelected9() {
    let modalPage=this.modal.create(PagecPage);
    modalPage.present();

  }
  itemSelected10() {
    let modalPage=this.modal.create(PagedPage);
    modalPage.present();

  }
///////////////////////
place1(key){
  console.log(key);
  console.log(this.all_items);
  this.arr=this.all_items.filter((item)=> {
    console.log(item);

    if(item.workplace == key){
      return item;
    }
  })
}
  place2(key){
    // console.log(key);
    // console.log(this.all_items);
      this.arr=this.all_items.filter((item)=> {
        console.log(item);

        if(item.position== key){
          return item;
        }
      })
  }
  place3(key){
    // console.log(key);
    // console.log(this.all_items);
    if(key=='不限')
    {
      this.arr=this.all_items;
      return this.arr;
    }
    else{
      this.arr=this.all_items.filter((item)=> {
        // console.log(item);
        if(item.mode== key){
          return item;
        }
      })
    }

  }




}


