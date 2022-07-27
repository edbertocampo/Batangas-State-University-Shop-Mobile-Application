import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackpackPageRoutingModule } from './backpack-routing.module';

import { BackpackPage } from './backpack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackpackPageRoutingModule
  ],
  declarations: [BackpackPage]
})
export class BackpackPageModule {}
