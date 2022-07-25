import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HatPageRoutingModule } from './hat-routing.module';

import { HatPage } from './hat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HatPageRoutingModule
  ],
  declarations: [HatPage]
})
export class HatPageModule {}
