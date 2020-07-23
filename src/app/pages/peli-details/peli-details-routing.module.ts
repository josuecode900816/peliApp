import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliDetailsPage } from './peli-details.page';

const routes: Routes = [
  {
    path: '',
    component: PeliDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliDetailsPageRoutingModule {}
