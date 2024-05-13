import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './modules/inicio/page/inicio/inicio.component';


const routes: Routes = [
 // {path:"home",component:HomeComponent},
 // {path:"galeria",component:GaleriaComponent},
 // {path:"servicio",component:ServiciosComponent}
 {path:"",component: InicioComponent},
 //el app routing es nuestro aarchivo de ruteo de proyecto va a contener las urls de los modulos oo comnponentes
 //inicio component va vacio 
 //carga peresosa se activa cuando solo cuando accedemos al modulo inicio 
 {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
{
  path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
