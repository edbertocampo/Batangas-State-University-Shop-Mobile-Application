import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blouse',
  templateUrl: './blouse.page.html',
  styleUrls: ['./blouse.page.scss'],
})
export class BlousePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
