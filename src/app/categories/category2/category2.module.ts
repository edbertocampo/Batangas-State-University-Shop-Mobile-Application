import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Category2PageRoutingModule } from './category2-routing.module';

import { Category2Page } from './category2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Category2PageRoutingModule
  ],
  declarations: [Category2Page]
})
export class Category2PageModule {}
