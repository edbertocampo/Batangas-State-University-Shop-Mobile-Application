import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoodie',
  templateUrl: './hoodie.page.html',
  styleUrls: ['./hoodie.page.scss'],
})
export class HoodiePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
