import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapPageRoutingModule } from './cap-routing.module';

import { CapPage } from './cap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapPageRoutingModule
  ],
  declarations: [CapPage]
})
export class CapPageModule {}
