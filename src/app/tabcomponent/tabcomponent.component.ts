import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tabcomponent',
  templateUrl: './tabcomponent.component.html',
  styleUrls: ['./tabcomponent.component.scss'],
})
export class TabcomponentComponent {
  name: string;

  constructor(private modalCtrl: ModalController) { }

  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm(){
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
