import { Component } from '@angular/core';

interface MenuItem{
  ruta: string,
  texto: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [ `li{
    cursor:pointer;
  }`
  ]
})
export class MenuComponent {

  menu: MenuItem[] =[
    {ruta:'/jugadores/list', texto: 'Jugadores'},
    {ruta:'/equipos/list', texto: 'Equipos'},
    {ruta:'/torneos/list', texto: 'Torneos'},
  ];

}
