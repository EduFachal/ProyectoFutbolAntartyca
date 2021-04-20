import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Torneo } from '../../interfaces/torneo';
import { TorneosService } from '../../service/torneos.service';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styles: [
  ]
})
export class TorneoComponent implements OnInit {

  torneo! : Torneo;
  constructor(private torneoService : TorneosService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.torneoService.getTorneoById(id))
    )
    .subscribe( resp => this.torneo = resp);
  }


}
