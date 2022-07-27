import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkirtPage } from './skirt.page';

const routes: Routes = [
  {
    path: '',
    component: SkirtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkirtPageRoutingModule {}
