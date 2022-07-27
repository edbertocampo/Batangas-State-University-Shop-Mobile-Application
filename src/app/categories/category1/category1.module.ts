import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Category1PageRoutingModule } from './category1-routing.module';

import { Category1Page } from './category1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Category1PageRoutingModule
  ],
  declarations: [Category1Page]
})
export class Category1PageModule {}
