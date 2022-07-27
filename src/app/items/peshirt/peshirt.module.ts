import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeshirtPageRoutingModule } from './peshirt-routing.module';

import { PeshirtPage } from './peshirt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeshirtPageRoutingModule
  ],
  declarations: [PeshirtPage]
})
export class PeshirtPageModule {}
