import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkirtPageRoutingModule } from './skirt-routing.module';

import { SkirtPage } from './skirt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkirtPageRoutingModule
  ],
  declarations: [SkirtPage]
})
export class SkirtPageModule {}
