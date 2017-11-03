import {Component,ViewChild} from '@angular/core';
import {NavController, Slides,App,ViewController,ModalController,NavParams} from 'ionic-angular';

import {HelpPage} from "../help/help";
import {HelpbPage} from "../helpb/helpb";
import {HelpcPage} from "../helpc/helpc";
import {HelpdPage} from "../helpd/helpd";
import { UserPositionTPage } from '../user-position-t/user-position-t';
import { UserResumePage } from '../user-resume/user-resume';
import {UserAddPositionPage} from "../user-add-position/user-add-position";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild(Slides) myslides:Slides;
  imgs=[
    {
      'img':'lunbo1.jpg',
      'links':'www.baidu.com'
    },
    {
      'img':'lunbo2.jpg',
      'links':'www.baidu.com'
    },
    {
      'img':'lunbo3.jpg',
      'links':'www.baidu.com'
    }
  ];
  constructor(public navCtrl: NavController,
               public navParams:NavParams,
               public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public appCtrl: App,
              public modal:ModalController
  ) {

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
  itemSelected1() {
    let modalPage=this.modal.create(HelpPage);
    modalPage.present();

  }
  itemSelected2() {
    let modalPage=this.modal.create(HelpbPage);
    modalPage.present();

  }
  itemSelected3() {
    let modalPage=this.modal.create(HelpcPage);
    modalPage.present();

  }
  itemSelected4() {
    let modalPage=this.modal.create(HelpdPage);
    modalPage.present();

  }
  itemSelected5() {
    let modalPage=this.modal.create( UserPositionTPage);
    modalPage.present();

  }
  itemSelected6() {
    let modalPage=this.modal.create(UserResumePage);
    modalPage.present();

  }
  itemSelected16() {
    let modalPage=this.modal.create(UserAddPositionPage);
    modalPage.present();

  }

  ionViewDidload(){
    console.log('ionViewDidload Contact');
  }
  ionViewWillEnter(){

  }

}
