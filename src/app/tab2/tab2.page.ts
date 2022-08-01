import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router:Router) {}

  openabout(){
    this.router.navigate(['about'])
  }

  category1(){
    this.router.navigate(['category1'])
  }

  category2(){
    this.router.navigate(['category2'])
  }

  category3(){
    this.router.navigate(['category3'])
  }

  category4(){
    this.router.navigate(['category4'])
  }

}
