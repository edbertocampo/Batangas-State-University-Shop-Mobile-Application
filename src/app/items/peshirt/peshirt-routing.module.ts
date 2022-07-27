import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeshirtPage } from './peshirt.page';

const routes: Routes = [
  {
    path: '',
    component: PeshirtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeshirtPageRoutingModule {}
