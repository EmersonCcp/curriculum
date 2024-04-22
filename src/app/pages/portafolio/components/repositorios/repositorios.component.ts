import { Component } from '@angular/core';

interface Repositorio {
  title: string;
  urlImg: string;
  link: string;
  tags: string[];
}

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss'],
})
export class RepositoriosComponent {
  repositorios: Repositorio[] = [
    {
      title: 'API de Autenticación con Node.js, Sequelize y JWT.',
      link: 'https://github.com/EmersonCcp/authentication_nodejs',
      urlImg: '/assets/img/repositorios/nodejs.jpeg',
      tags: ['Nodejs', 'JWT', 'Sequelize'],
    },
    {
      title: 'Mapa Interactivo para Visualización de Loteamientos',
      link: 'https://github.com/EmersonCcp/google-map-vercel',
      urlImg: '/assets/img/repositorios/map-lote.png',
      tags: ['Angular', 'TailwindCss', 'Google Maps'],
    },
    {
      title: 'Autenticación con Nestjs + JWT',
      link: 'https://github.com/EmersonCcp/nest-auth',
      urlImg: '/assets/img/repositorios/nest-auth.png',
      tags: ['Nets', 'JWT'],
    },
    {
      title: 'Autenticación con Angular',
      link: 'https://github.com/EmersonCcp/angular-auth',
      urlImg: '/assets/img/repositorios/angular-auth.png',
      tags: ['Angular', 'Tailwind'],
    },
  ];

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
