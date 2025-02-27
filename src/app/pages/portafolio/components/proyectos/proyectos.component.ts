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
      title: 'Lescell - Ecommerce',
      link: 'https://lescell-paraqvaria.web.app/page',
      urlImg: '/assets/img/proyectos/lescell.png',
      tags: ['Angular', 'TailwindCss', 'Supabase', 'Nodejs', 'Material'],
    },
    {
      title: 'ENSystem - Sistema de Gestión',
      link: 'https://ensystem.vercel.app/',
      urlImg: '/assets/img/proyectos/ensystem.png',
      tags: ['Angular', 'TailwindCss', 'Sequelize', 'Nodejs'],
    },
    {
      title: 'BibliotecApp - Libreria Online',
      link: 'https://bibliotecapp.vercel.app/books',
      urlImg: '/assets/img/proyectos/bibliotecapp.png',
      tags: ['Angular', 'TailwindCss', 'Firebase'],
    },
    {
      title: 'GMA - Sistema de Gestión de Proyectos',
      link: 'https://gma-consultora.vercel.app/auth/login',
      urlImg: '/assets/img/proyectos/gma.png',
      tags: ['Angular', 'TailwindCss', 'Sequelize', 'Nodejs'],
    },
    {
      title: 'INSALUD - Sistema de Vizaciones',
      link: 'https://paraqvaria-ims.web.app/auth/login',
      urlImg: '/assets/img/proyectos/insalud.png',
      tags: ['Angular', 'TailwindCss', 'Sequelize', 'Nodejs'],
    },
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
      title: 'Loteamiento Google Maps Angular',
      link: 'https://google-map-vercel.vercel.app/',
      urlImg: '/assets/img/proyectos/mapa-lote.png',
      tags: ['Angular', 'Google Maps Api', 'Tailwind'],
    },
    {
      title: 'Aero&Marina',
      link: 'https://paraqvariaaeroymarina.com/',
      urlImg: '/assets/img/proyectos/aero.png',
      tags: ['Angular', 'Google Maps', 'TailwindCss', 'Supabase'],
    },
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.aplicarEstilosDeFondoAleatorios();
  }

  public aplicarEstilosDeFondoAleatorios(): void {
    const elementosLi = document.querySelectorAll('.lista-tags > li');
    elementosLi.forEach((elementoLi: any) => {
      elementoLi.style.backgroundColor = this.obtenerColorAleatorioSuave();
    });
  }

  public obtenerColorAleatorioSuave(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Ajustar los componentes RGB para suavizar el color
    const suavizar = 50; // Puedes ajustar este valor según tus preferencias
    const rSuave = Math.min(r + suavizar, 255);
    const gSuave = Math.min(g + suavizar, 255);
    const bSuave = Math.min(b + suavizar, 255);

    return `rgb(${rSuave}, ${gSuave}, ${bSuave})`;
  }
}
