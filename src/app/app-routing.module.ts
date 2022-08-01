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
  },
  {
    path: 'backpack',
    loadChildren: () => import('./items/backpack/backpack.module').then( m => m.BackpackPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./items/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'barong',
    loadChildren: () => import('./items/barong/barong.module').then( m => m.BarongPageModule)
  },
  {
    path: 'pants',
    loadChildren: () => import('./items/pants/pants.module').then( m => m.PantsPageModule)
  },
  {
    path: 'blouse',
    loadChildren: () => import('./items/blouse/blouse.module').then( m => m.BlousePageModule)
  },
  {
    path: 'skirt',
    loadChildren: () => import('./items/skirt/skirt.module').then( m => m.SkirtPageModule)
  },
  {
    path: 'peshirt',
    loadChildren: () => import('./items/peshirt/peshirt.module').then( m => m.PeshirtPageModule)
  },
  {
    path: 'pepants',
    loadChildren: () => import('./items/pepants/pepants.module').then( m => m.PepantsPageModule)
  },
  {
    path: 'category1',
    loadChildren: () => import('./categories/category1/category1.module').then( m => m.Category1PageModule)
  },
  {
    path: 'category2',
    loadChildren: () => import('./categories/category2/category2.module').then( m => m.Category2PageModule)
  },
  {
    path: 'category3',
    loadChildren: () => import('./categories/category3/category3.module').then( m => m.Category3PageModule)
  },
  {
    path: 'category4',
    loadChildren: () => import('./categories/category4/category4.module').then( m => m.Category4PageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
