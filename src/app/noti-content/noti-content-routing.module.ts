import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotiContentPage } from './noti-content.page';

const routes: Routes = [
  {
    path: '',
    component: NotiContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotiContentPageRoutingModule {}
