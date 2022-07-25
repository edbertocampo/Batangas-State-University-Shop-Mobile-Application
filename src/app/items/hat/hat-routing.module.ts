import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HatPage } from './hat.page';

const routes: Routes = [
  {
    path: '',
    component: HatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HatPageRoutingModule {}
