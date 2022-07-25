import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  openmug(){
    this.router.navigate(['mug'])
  }

  opentumbler(){
    this.router.navigate(['tumbler'])
  }

  openbutton(){
    this.router.navigate(['button'])
  }

  opencalendar(){
    this.router.navigate(['calendar'])
  }

  opencap(){
    this.router.navigate(['cap'])
  }

  openhat(){
    this.router.navigate(['hat'])
  }

  openhoodie(){
    this.router.navigate(['hoodie'])
  }

  openmask(){
    this.router.navigate(['mask'])
  }

  openpaperbag(){
    this.router.navigate(['paperbag'])
  }

  openplanner(){
    this.router.navigate(['planner'])
  }
}