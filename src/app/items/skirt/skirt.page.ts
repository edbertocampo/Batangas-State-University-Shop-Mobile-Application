import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skirt',
  templateUrl: './skirt.page.html',
  styleUrls: ['./skirt.page.scss'],
})
export class SkirtPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
