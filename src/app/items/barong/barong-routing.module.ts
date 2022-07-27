import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarongPage } from './barong.page';

const routes: Routes = [
  {
    path: '',
    component: BarongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarongPageRoutingModule {}
