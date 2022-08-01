import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router:Router, private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Placed Reservation Successfully!',
      buttons: ['OK']
    });

    await alert.present();
    setTimeout(() => {
      this.router.navigate(['tabs']);
    }, 1000)
  }

  openabout(){
    this.router.navigate(['about'])
  }
}

