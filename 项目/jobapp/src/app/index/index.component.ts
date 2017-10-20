import { Component, OnInit } from '@angular/core';
import { LocalStorage } from './../services/localStorage.service';
declare var $:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers:[LocalStorage]
})
export class IndexComponent implements OnInit {
  isShow = true;
  constructor(
    private local: LocalStorage,
  ) { }

  ngOnInit() {

  }
  change():void{
    this.isShow = false;
  }



  add(event) {
    console.log('只执行一次');
    $(event.target).addClass('animated infinite swing');
    window.setTimeout(function () {
      $(event.target).removeClass('animated infinite swing');
    }, 800)

  }

  remove(event) {
    $(event.target).removeClass('animated infinite swing');
  }

  add2(event) {
    console.log('只执行有一次');
    $(event.target).addClass('animated bounce');
    window.setTimeout(function () {
      $(event.target).removeClass('animated bounce');
    }, 800)
  }

  remove2(event) {
    $(event.target).removeClass('animated bounce');
  }



}
