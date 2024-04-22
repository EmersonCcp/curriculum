import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';


@NgModule({
  declarations: [
    PortafolioComponent,
    DescripcionComponent,
    ProyectosComponent,
    RepositoriosComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule
  ]
})
export class PortafolioModule { }
