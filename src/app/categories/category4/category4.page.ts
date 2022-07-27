import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category4',
  templateUrl: './category4.page.html',
  styleUrls: ['./category4.page.scss'],
})
export class Category4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs/tab2'])
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

  openbackpack(){
    this.router.navigate(['backpack'])
  }

  openwallet(){
    this.router.navigate(['wallet'])
  }

  openbarong(){
    this.router.navigate(['barong'])
  }

  openpants(){
    this.router.navigate(['pants'])
  }

  openblouse(){
    this.router.navigate(['blouse'])
  }

  openskirt(){
    this.router.navigate(['skirt'])
  }

  openpeshirt(){
    this.router.navigate(['peshirt'])
  }

  openpepants(){
    this.router.navigate(['pepants'])
  }

}
