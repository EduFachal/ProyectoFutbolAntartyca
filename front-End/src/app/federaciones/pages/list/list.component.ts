import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Federacion } from '../../interfaces/federacion';
import { FederacionesService } from '../../service/federaciones.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  federaciones: Federacion[] = [];
  constructor(private federacionesService: FederacionesService) { }

  ngOnInit(): void {
    this.federacionesService.getFederaciones().subscribe(federacion =>this.federaciones = federacion)
  }

}
