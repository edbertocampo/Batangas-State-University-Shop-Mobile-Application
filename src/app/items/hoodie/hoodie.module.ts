import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoodiePageRoutingModule } from './hoodie-routing.module';

import { HoodiePage } from './hoodie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoodiePageRoutingModule
  ],
  declarations: [HoodiePage]
})
export class HoodiePageModule {}
