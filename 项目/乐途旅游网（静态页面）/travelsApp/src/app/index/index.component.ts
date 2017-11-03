import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(document).ready( function() {
      $('.span-a').animate({top: '-200px'}, 800);
      let sTop;
      $(window).scroll(function () {
        sTop = $(this).scrollTop();
        let a = $('.span-a');
        if (sTop >=400)
          a.animate({top: '-500px'}, 800);
      });
    });

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



  add3(event) {
    console.log('只执行有一次');
    $(event.target).addClass('animated fadeOut');
    window.setTimeout(function () {
      $(event.target).removeClass('animated fadeOut');
    }, 800)
  }

  remove3(event) {
    $(event.target).removeClass('animated fadeOut');
  }

/////////////




}
