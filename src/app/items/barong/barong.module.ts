import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarongPageRoutingModule } from './barong-routing.module';

import { BarongPage } from './barong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarongPageRoutingModule
  ],
  declarations: [BarongPage]
})
export class BarongPageModule {}
