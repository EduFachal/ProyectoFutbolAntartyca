import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Ciudad } from '../../interfaces/ciudad';
import { CiudadesService } from '../../service/ciudades.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styles: [
  ]
})
export class CiudadComponent implements OnInit {

  ciudad! : Ciudad;
  constructor(private ciudadService : CiudadesService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.ciudadService.getCiudadById(id))
    )
    .subscribe( resp => this.ciudad = resp);
  }

}
