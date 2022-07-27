import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Category2Page } from './category2.page';

const routes: Routes = [
  {
    path: '',
    component: Category2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Category2PageRoutingModule {}
