import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { EquiposRoutingModule } from './equipos-routing.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    EquiposRoutingModule
  ]
})
export class EquiposModule { }
