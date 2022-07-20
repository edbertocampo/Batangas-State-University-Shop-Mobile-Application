import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MugPageRoutingModule } from './mug-routing.module';

import { MugPage } from './mug.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MugPageRoutingModule
  ],
  declarations: [MugPage]
})
export class MugPageModule {}
