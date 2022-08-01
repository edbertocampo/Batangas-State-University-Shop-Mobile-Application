import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.page.html',
  styleUrls: ['./backpack.page.scss'],
})
export class BackpackPage implements OnInit{

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
  }

  options = {
    slidesPerView:  1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,

  }
  
  async cart() {
    const alert = await this.alertController.create({
      message: 'Added to Cart!',
      buttons: ['OK']
    });

    await alert.present();
  }

  home(){
    this.router.navigate(['/tabs'])
  }


}
