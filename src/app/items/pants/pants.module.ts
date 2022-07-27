import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantsPageRoutingModule } from './pants-routing.module';

import { PantsPage } from './pants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantsPageRoutingModule
  ],
  declarations: [PantsPage]
})
export class PantsPageModule {}
