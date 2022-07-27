import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Category1Page } from './category1.page';

const routes: Routes = [
  {
    path: '',
    component: Category1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Category1PageRoutingModule {}
