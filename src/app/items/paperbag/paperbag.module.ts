import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaperbagPageRoutingModule } from './paperbag-routing.module';

import { PaperbagPage } from './paperbag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaperbagPageRoutingModule
  ],
  declarations: [PaperbagPage]
})
export class PaperbagPageModule {}
