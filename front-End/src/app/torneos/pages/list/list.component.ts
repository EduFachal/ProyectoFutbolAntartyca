import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../interfaces/torneo';
import { TorneosService } from '../../service/torneos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  torneos : Torneo[] = [];
  constructor(private torneoService : TorneosService) { }

  ngOnInit(): void {
    this.torneoService.getTorneos().subscribe(resp => this.torneos = resp);
  }


}
