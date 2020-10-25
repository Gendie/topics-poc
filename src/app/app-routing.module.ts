import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TapsPocComponent } from './pages/taps-poc/taps-poc.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'taps-poc',
    pathMatch: 'full'
  }, {
    path: 'taps-poc',
    component: TapsPocComponent
  }, {
    path: '**',
    redirectTo: 'taps-poc',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
