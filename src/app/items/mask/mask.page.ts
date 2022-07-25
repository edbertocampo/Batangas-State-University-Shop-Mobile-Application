import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.page.html',
  styleUrls: ['./mask.page.scss'],
})
export class MaskPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
