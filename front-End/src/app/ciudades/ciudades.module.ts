import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadesRoutingModule } from './ciudades-routing.module';
import { ListComponent } from './pages/list/list.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { AddCiudadComponent } from './pages/add-ciudad/add-ciudad.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    CiudadComponent,
    AddCiudadComponent
  ],
  imports: [
    CommonModule,
    CiudadesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CiudadesModule { }
