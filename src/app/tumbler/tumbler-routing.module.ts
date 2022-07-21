import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TumblerPage } from './tumbler.page';

const routes: Routes = [
  {
    path: '',
    component: TumblerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TumblerPageRoutingModule {}
