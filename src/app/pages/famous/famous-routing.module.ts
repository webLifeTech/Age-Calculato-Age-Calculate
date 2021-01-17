import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamousPage } from './famous.page';

const routes: Routes = [
  {
    path: '',
    component: FamousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamousPageRoutingModule {}
