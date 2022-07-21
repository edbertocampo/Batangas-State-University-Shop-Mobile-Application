import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mug',
  templateUrl: './mug.page.html',
  styleUrls: ['./mug.page.scss'],
})
export class MugPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home'])
  }

}
