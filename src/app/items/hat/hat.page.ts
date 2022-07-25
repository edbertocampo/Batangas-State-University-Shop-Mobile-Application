import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hat',
  templateUrl: './hat.page.html',
  styleUrls: ['./hat.page.scss'],
})
export class HatPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
