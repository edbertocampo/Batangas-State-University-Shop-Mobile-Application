import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Category4Page } from './category4.page';

const routes: Routes = [
  {
    path: '',
    component: Category4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Category4PageRoutingModule {}
