import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PepantsPageRoutingModule } from './pepants-routing.module';

import { PepantsPage } from './pepants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PepantsPageRoutingModule
  ],
  declarations: [PepantsPage]
})
export class PepantsPageModule {}
