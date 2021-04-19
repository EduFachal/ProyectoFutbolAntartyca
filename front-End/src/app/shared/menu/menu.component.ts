import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
interface MenuRutasPrincipales {
  ruta: string,
  texto: string,
  childrenRouting?: MenuRutasAcciones[]
}

interface MenuRutasAcciones {
  rutaChildren: string,
  textoChildren: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`li{
    cursor:pointer;
  };
  ul{
    margin-bottom:5%
  }`
  ]
})
export class MenuComponent {

  rutaChild: MenuRutasAcciones[] = [];
  txtMin: string = "";
  nombreRuta: string = "/";
  menu: MenuRutasPrincipales[] = [
    {ruta: '/jugadores/list', texto: 'Jugadores', childrenRouting: [] },
    {ruta: '/equipos/list', texto: 'Equipos', childrenRouting: [] },
    {ruta: '/torneos/list', texto: 'Torneos' },
  ];


  getValue(txt: string) {
    this.txtMin = txt.toLowerCase();

    this.rutaChild=[];

    this.nombreRuta += this.txtMin + '/add';

    this.rutaChild.push(
      {
        rutaChildren: this.nombreRuta,
        textoChildren: 'Añadir ' + txt
      });

      this.nombreRuta="/";
      this.nombreRuta+=this.txtMin+'/search';

      this.rutaChild.push(
        {rutaChildren:this.nombreRuta,
          textoChildren:'Buscar '+txt});  
      this.nombreRuta="/";

    /* this.menu.map(resp=>{
       if(resp.texto===txt){
         this.nombreRuta+=this.txtMin+'/add';
 
         this.rutaChild.push(
           {rutaChildren:this.nombreRuta,
             textoChildren:'Añadir '+txt});
 
         resp.childrenRouting?.push(...this.rutaChild);
 
         this.nombreRuta+=this.txtMin+'/search';
 
         this.rutaChild.push(
           {rutaChildren:this.nombreRuta,
             textoChildren:'Buscar '+txt});
 
         resp.childrenRouting?.push(...this.rutaChild);
 
       }
     });*/
  }
}
