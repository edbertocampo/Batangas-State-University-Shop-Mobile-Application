import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlousePageRoutingModule } from './blouse-routing.module';

import { BlousePage } from './blouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlousePageRoutingModule
  ],
  declarations: [BlousePage]
})
export class BlousePageModule {}
