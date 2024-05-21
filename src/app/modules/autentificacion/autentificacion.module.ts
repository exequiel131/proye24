import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//archivo de ruta
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//visdtas de autentificacion
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';


@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ],
  exports:[
    RegistroComponent,
    IniciosesionComponent
  ]
})
export class AutentificacionModule { }