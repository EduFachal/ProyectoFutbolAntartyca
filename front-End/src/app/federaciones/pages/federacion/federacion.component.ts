import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Federacion } from '../../interfaces/federacion';
import { FederacionesService } from '../../service/federaciones.service';

@Component({
  selector: 'app-federacion',
  templateUrl: './federacion.component.html',
  styles: [
  ]
})
export class FederacionComponent implements OnInit {

  federacion! : Federacion;
  constructor(private federacionService : FederacionesService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.federacionService.getFederacionById(id))
    )
    .subscribe( federacion => this.federacion = federacion);
  }

}
