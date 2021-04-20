import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorneosRoutingModule } from './torneos-routing.module';
import { AddTorneoComponent } from './pages/add-torneo/add-torneo.component';
import { TorneoComponent } from './pages/torneo/torneo.component';
import { ListComponent } from './pages/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTorneoComponent,
    TorneoComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    TorneosRoutingModule,
    ReactiveFormsModule
  ]
})
export class TorneosModule { }
