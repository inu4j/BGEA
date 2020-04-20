import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'noti-list',
    loadChildren: () => import('./noti-list/noti-list.module').then( m => m.NotiListPageModule)
  },
  {
    path: 'noti-content',
    loadChildren: () => import('./noti-content/noti-content.module').then( m => m.NotiContentPageModule)
  },
  {
    path: 'church',
    loadChildren: () => import('./church/church.module').then( m => m.ChurchPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
