import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AddEmpleadoComponent } from './pages/add-empleado/add-empleado.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    AddEmpleadoComponent,
    EmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class EmpleadosModule { }
