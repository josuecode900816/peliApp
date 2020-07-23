import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliDetailsPageRoutingModule } from './peli-details-routing.module';

import { PeliDetailsPage } from './peli-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliDetailsPageRoutingModule
  ],
  declarations: [PeliDetailsPage]
})
export class PeliDetailsPageModule {}
