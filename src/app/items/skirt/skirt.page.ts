import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-skirt',
  templateUrl: './skirt.page.html',
  styleUrls: ['./skirt.page.scss'],
})
export class SkirtPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  options = {
    slidesPerView:  1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,

  }

  home(){
    this.router.navigate(['/tabs'])
  }

  async cart() {
    const alert = await this.alertController.create({
      message: 'Added to Cart!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
