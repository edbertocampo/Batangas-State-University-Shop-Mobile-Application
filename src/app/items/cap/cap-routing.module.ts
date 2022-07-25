import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapPage } from './cap.page';

const routes: Routes = [
  {
    path: '',
    component: CapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapPageRoutingModule {}
