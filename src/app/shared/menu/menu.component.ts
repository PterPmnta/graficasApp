import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      ruta: '/graficas/barra',
      texto: 'Barras',
    },
    {
      ruta: '/graficas/barra-doble',
      texto: 'Barra Doble',
    },
    {
      ruta: '/graficas/dona',
      texto: 'Dona',
    },
    {
      ruta: '/graficas/dona-api',
      texto: 'Dona API',
    },
  ];
}
