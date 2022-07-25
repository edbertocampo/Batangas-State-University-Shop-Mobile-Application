import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tumbler',
  templateUrl: './tumbler.page.html',
  styleUrls: ['./tumbler.page.scss'],
})
export class TumblerPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }
  cart(){
    this.router.navigate(['./tabs'])
  }
}
