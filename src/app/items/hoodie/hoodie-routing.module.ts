import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoodiePage } from './hoodie.page';

const routes: Routes = [
  {
    path: '',
    component: HoodiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoodiePageRoutingModule {}
