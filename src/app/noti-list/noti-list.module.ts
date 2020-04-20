import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotiListPageRoutingModule } from './noti-list-routing.module';

import { NotiListPage } from './noti-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotiListPageRoutingModule
  ],
  declarations: [NotiListPage]
})
export class NotiListPageModule {}
