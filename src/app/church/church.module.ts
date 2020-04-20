import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChurchPageRoutingModule } from './church-routing.module';

import { ChurchPage } from './church.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChurchPageRoutingModule
  ],
  declarations: [ChurchPage]
})
export class ChurchPageModule {}
