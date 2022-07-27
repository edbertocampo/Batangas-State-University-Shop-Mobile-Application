import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.page.html',
  styleUrls: ['./backpack.page.scss'],
})
export class BackpackPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
