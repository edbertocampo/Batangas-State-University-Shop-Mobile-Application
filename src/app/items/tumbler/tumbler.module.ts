import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TumblerPageRoutingModule } from './tumbler-routing.module';

import { TumblerPage } from './tumbler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TumblerPageRoutingModule
  ],
  declarations: [TumblerPage]
})
export class TumblerPageModule {}
