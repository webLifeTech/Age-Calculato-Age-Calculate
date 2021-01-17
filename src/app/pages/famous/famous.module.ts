import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamousPageRoutingModule } from './famous-routing.module';

import { FamousPage } from './famous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamousPageRoutingModule
  ],
  declarations: [FamousPage]
})
export class FamousPageModule {}
