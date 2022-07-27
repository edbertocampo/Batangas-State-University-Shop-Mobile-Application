import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlousePage } from './blouse.page';

const routes: Routes = [
  {
    path: '',
    component: BlousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlousePageRoutingModule {}
