import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Category4PageRoutingModule } from './category4-routing.module';

import { Category4Page } from './category4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Category4PageRoutingModule
  ],
  declarations: [Category4Page]
})
export class Category4PageModule {}
