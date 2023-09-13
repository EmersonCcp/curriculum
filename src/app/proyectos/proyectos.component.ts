import { Component, OnInit } from '@angular/core';

interface Proyectos {
  title: string;
  urlImg: string;
  link: string;
  tags: string[];
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
})
export class ProyectosComponent implements OnInit {
  public proyectos: Proyectos[] = [
    {
      title: 'Paraqvaria',
      link: 'https://paraqvariapage.web.app/',
      urlImg: '/assets/img/proyectos/paraqvaria.png',
      tags: ['Angular', 'TailwindCss', 'Firebase', 'Material'],
    },
    {
      title: 'Cumbres de San Bernardino',
      link: 'https://cumbresdesanbernardino.com/',
      urlImg: '/assets/img/proyectos/cumbres.png',
      tags: ['Angular', 'TailwindCss', 'Firebase', 'Google Maps'],
    },
    {
      title: 'Mapas Angular',
      link: 'https://angular-mapas2000.netlify.app/',
      urlImg: '/assets/img/proyectos/mapa.png',
      tags: ['Angular', 'Mapbox', 'Boostrap'],
    },
    {
      title: 'Aero&Marina',
      link: 'https://paraqvariaaeroymarina.com/',
      urlImg: '/assets/img/proyectos/aero.png',
      tags: ['Angular', 'Google Maps', 'TailwindCss', 'Supabase'],
    },
  ];

  constructor() {
    const color = this.obtenerColorAleatorio();
    const color1 = this.obtenerColorAleatorio();
    console.log(color, color1);
  }

  ngOnInit() {}

  public obtenerColorAleatorio(): string {
    const colores = [
      '#FF0000',
      '#00FF00',
      '#0000FF',
      '#FFFF00',
      '#00FFFF',
      '#FF00FF',
    ]; // Puedes agregar más colores según tus necesidades

    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorAleatorio = colores[indiceAleatorio];

    return colorAleatorio;
  }
}
