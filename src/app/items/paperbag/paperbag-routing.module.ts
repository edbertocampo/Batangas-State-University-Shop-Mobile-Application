import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaperbagPage } from './paperbag.page';

const routes: Routes = [
  {
    path: '',
    component: PaperbagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaperbagPageRoutingModule {}
