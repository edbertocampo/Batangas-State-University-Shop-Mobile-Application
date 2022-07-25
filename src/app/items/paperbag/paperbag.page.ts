import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paperbag',
  templateUrl: './paperbag.page.html',
  styleUrls: ['./paperbag.page.scss'],
})
export class PaperbagPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/tabs'])
  }

}
