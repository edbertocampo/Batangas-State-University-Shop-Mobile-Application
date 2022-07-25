import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaskPage } from './mask.page';

const routes: Routes = [
  {
    path: '',
    component: MaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaskPageRoutingModule {}
