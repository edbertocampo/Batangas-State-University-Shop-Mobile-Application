import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Category3PageRoutingModule } from './category3-routing.module';

import { Category3Page } from './category3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Category3PageRoutingModule
  ],
  declarations: [Category3Page]
})
export class Category3PageModule {}
