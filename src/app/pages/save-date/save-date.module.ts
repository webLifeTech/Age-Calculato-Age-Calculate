import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveDatePageRoutingModule } from './save-date-routing.module';

import { SaveDatePage } from './save-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveDatePageRoutingModule
  ],
  declarations: [SaveDatePage]
})
export class SaveDatePageModule {}
