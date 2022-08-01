import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-peshirt',
  templateUrl: './peshirt.page.html',
  styleUrls: ['./peshirt.page.scss'],
})
export class PeshirtPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
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
