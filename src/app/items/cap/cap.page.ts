import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cap',
  templateUrl: './cap.page.html',
  styleUrls: ['./cap.page.scss'],
})
export class CapPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
