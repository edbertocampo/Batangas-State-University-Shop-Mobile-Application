import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantsPage } from './pants.page';

const routes: Routes = [
  {
    path: '',
    component: PantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantsPageRoutingModule {}
