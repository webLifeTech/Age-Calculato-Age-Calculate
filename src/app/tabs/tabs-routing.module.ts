import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HistoryPage } from '../pages/history/history.page';
import { OverviewPage } from '../pages/overview/overview.page';
import { MorePage } from '../pages/more/more.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'history',
        loadChildren: () => import('../pages/history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: 'overview',
        loadChildren: () => import('../pages/overview/overview.module').then(m => m.OverviewPageModule)
      },
      {
        path: 'famous',
        loadChildren: () => import('../pages/famous/famous.module').then(m => m.FamousPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../pages/more/more.module').then(m => m.MorePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
