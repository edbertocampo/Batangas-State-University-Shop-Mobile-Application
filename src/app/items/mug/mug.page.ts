import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mug',
  templateUrl: './mug.page.html',
  styleUrls: ['./mug.page.scss'],
})
export class MugPage implements OnInit {

  constructor(private router : Router) { }

  options = {
    slidesPerView:  1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,

  }
  
  ngOnInit() {
  }

  home(){
    this.router.navigate(['./tabs'])
  }

  cart(){
    this.router.navigate(['./tab3'])
  }

}
