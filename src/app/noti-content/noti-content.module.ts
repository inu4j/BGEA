import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotiContentPageRoutingModule } from './noti-content-routing.module';

import { NotiContentPage } from './noti-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotiContentPageRoutingModule
  ],
  declarations: [NotiContentPage]
})
export class NotiContentPageModule {}
