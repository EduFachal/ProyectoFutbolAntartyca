import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { AddDepartamentoComponent } from './pages/add-departamento/add-departamento.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    AddDepartamentoComponent,
    DepartamentoComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule
  ]
})
export class DepartamentosModule { }
