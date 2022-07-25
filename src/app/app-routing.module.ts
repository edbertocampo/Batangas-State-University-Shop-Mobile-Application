import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'mug',
    loadChildren: () => import('./items/mug/mug.module').then( m => m.MugPageModule)
  },
  {
    path: 'tumbler',
    loadChildren: () => import('./items/tumbler/tumbler.module').then( m => m.TumblerPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },  {
    path: 'cap',
    loadChildren: () => import('./items/cap/cap.module').then( m => m.CapPageModule)
  },
  {
    path: 'hat',
    loadChildren: () => import('./items/hat/hat.module').then( m => m.HatPageModule)
  },
  {
    path: 'hoodie',
    loadChildren: () => import('./items/hoodie/hoodie.module').then( m => m.HoodiePageModule)
  },
  {
    path: 'mask',
    loadChildren: () => import('./items/mask/mask.module').then( m => m.MaskPageModule)
  },
  {
    path: 'planner',
    loadChildren: () => import('./items/planner/planner.module').then( m => m.PlannerPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./items/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./items/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'paperbag',
    loadChildren: () => import('./items/paperbag/paperbag.module').then( m => m.PaperbagPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
