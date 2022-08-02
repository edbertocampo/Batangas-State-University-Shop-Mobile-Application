import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  openabout(){
    this.router.navigate(['about'])
  }

  opencart(){
    this.router.navigate(['tabs/tab3'])
  }

  openaccount(){
    this.router.navigate(['account'])
  }

  logout(){
    this.router.navigate(['welcome'])
  }

}
