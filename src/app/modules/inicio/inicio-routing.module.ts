import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';

const routes: Routes = [
  {
    path:"",component: InicioComponent
  },
  {
    path:"inicio",component:InicioComponent
  },
  //el shared no va por que es un componente
  //el inicio si por que ees un modulo y tiene a page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
