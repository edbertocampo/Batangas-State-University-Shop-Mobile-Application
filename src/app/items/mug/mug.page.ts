import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mug',
  templateUrl: './mug.page.html',
  styleUrls: ['./mug.page.scss'],
})
export class MugPage implements OnInit {

  constructor(private router : Router, private alertController: AlertController) { }

  options = {
    slidesPerView:  1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,

  }
  
  ngOnInit() {
  }

  home(){
    this.router.navigate(['./tabs'])
  }

  async cart() {
    const alert = await this.alertController.create({
      message: 'Added to Cart!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
