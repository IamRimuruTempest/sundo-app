import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'hero',
        loadChildren: () => import('./hero/hero.module').then( m => m.HeroPageModule)
      },
       {
        path: 'account',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      },
    ]
  },
  
  {
    path: 'battery/:id',
    loadChildren: () => import('./battery/battery.module').then( m => m.BatteryPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
