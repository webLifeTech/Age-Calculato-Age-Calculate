import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveDatePage } from './save-date.page';

const routes: Routes = [
  {
    path: '',
    component: SaveDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveDatePageRoutingModule {}
