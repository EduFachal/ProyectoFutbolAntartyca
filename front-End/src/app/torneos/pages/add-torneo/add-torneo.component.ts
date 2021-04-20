import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Torneo } from '../../interfaces/torneo';
import { TorneosService } from '../../service/torneos.service';

@Component({
  selector: 'app-add-torneo',
  templateUrl: './add-torneo.component.html',
  styles: [
  ]
})
export class AddTorneoComponent implements OnInit {

  torneo: Torneo={
    cod_torneo: '',
    nombre: '',
    descripcion: ''
  }

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    descripcion:['',[Validators.required,Validators.minLength(3)]]
  })

  constructor(private torneoService: TorneosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.torneoService.getTorneoById(id))
      )
      .subscribe(resp => this.torneo = resp);

    this.myForm.reset({
      nombre: '',
      descripcion: ''
    })
  }

  saveTorneo() {

    if (this.torneo.cod_torneo) {
      this.torneoService.updateTorneo(this.torneo)
        .subscribe(resp => {
          this.router.navigate(['/torneos/list'])
        })
    } else {
      this.torneo = { ...this.torneo, ...this.myForm.value }
      this.torneo.cod_torneo = "1";
      this.torneoService.addTorneo(this.torneo)
        .subscribe(resp => {
          this.router.navigate(['/torneos/list'])
        })
    }
  }

  deleteTorneo() {
    this.torneoService.deleteTorneo(this.torneo)
      .subscribe(resp => {
        this.router.navigate(['/torneos/list']);
      })
  }

  validField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }


}
