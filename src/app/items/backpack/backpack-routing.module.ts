import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackpackPage } from './backpack.page';

const routes: Routes = [
  {
    path: '',
    component: BackpackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackpackPageRoutingModule {}
