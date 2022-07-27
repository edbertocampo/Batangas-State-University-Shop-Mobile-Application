import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peshirt',
  templateUrl: './peshirt.page.html',
  styleUrls: ['./peshirt.page.scss'],
})
export class PeshirtPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
