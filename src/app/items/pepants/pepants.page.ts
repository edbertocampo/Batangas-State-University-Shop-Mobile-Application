import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pepants',
  templateUrl: './pepants.page.html',
  styleUrls: ['./pepants.page.scss'],
})
export class PepantsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
