1. 布局

    ```
     <ion-grid>
      <ion-row>
        <ion-col col-6>苏州</ion-col>
        <ion-col col-6 style="text-align: right" >...</ion-col>
      </ion-row>
    </ion-grid>
    ```

2. 页面跳转
    
    导入页面跳转模块
    
    ```
    import { NavController, NavParams } from 'ionic-angular';
    ```
    
    创建跳转对象
    
    ```
    constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }
    ```

    在事件中跳转+传参数
    
    ```
    this.navCtrl.push(TabsPage,{userId:'001'});
    ```
    
    在目标页中取参数
    
    ```
    //导入模块
    import { NavController, NavParams } from 'ionic-angular';
    //创建参数对象
    private navParma:NavParams
    
    //生命周期函数
    ionViewDidEnter() {
    this.tabRef.select(0);
    let id=this.navParma.get('userId');
    console.log(id);
  }
    ```
    
    
3. 图片轮播

    最好把图片轮播放在页面的头部
    
    ```
    <ion-slides autoplay="2000" loop="true" (ionSlideDidChange)="slideChanged()" #slides>
      <ion-slide *ngFor="let item of imgs" >
        <img src="assets/img/{{item}}" alt="" (click)="showImg(item)">
      </ion-slide>

    </ion-slides>
    ```
    
    事件
    
    获取轮播控件对象
    
    ```
    import { Component,ViewChild } from '@angular/core';
    
     @ViewChild(Slides) slides: Slides;
    ```
    
    ```
    slideChanged(){
    let activeIndex=this.slides.getActiveIndex();
    console.log(activeIndex);
    this.slides.startAutoplay();
  }
  showImg(img){
    console.log(img);
  }
    ```

4. list

    ```
    <ion-list no-lines>
    <ion-item *ngFor="let item of items" (click)="itemSelected(item)">
      <ion-avatar item-start>
        <img src="{{item?.icon_url}}">
      </ion-avatar>
      <h2>{{item?.post}}</h2>
      <h3>{{item?.salary}}</h3>
      <ion-grid>
        <ion-row>
          <ion-col col-4>苏州</ion-col>
          <ion-col col-4>猎聘</ion-col>
          <ion-col col-4 style="text-align: right" >...</ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
  </ion-list>
    ```

