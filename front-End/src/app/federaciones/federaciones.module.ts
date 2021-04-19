import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FederacionesRoutingModule } from './federaciones-routing.module';
import { FederacionComponent } from './pages/federacion/federacion.component';
import { ListComponent } from './pages/list/list.component';
import { AddFederacionComponent } from './pages/add-federacion/add-federacion.component';


@NgModule({
  declarations: [
    FederacionComponent,
    ListComponent,
    AddFederacionComponent
  ],
  imports: [
    CommonModule,
    FederacionesRoutingModule
  ]
})
export class FederacionesModule { }
