import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MugPage } from './mug.page';

const routes: Routes = [
  {
    path: '',
    component: MugPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MugPageRoutingModule {}
