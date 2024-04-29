import { Component } from '@angular/core';
///importamos interfaz
import { Animal } from 'src/app/models/animal';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //propiedad publcia tipo array
public info:Animal[];

//
constructor(){
this.info = [
{
  id:"",
  nombre:"gatito",
  raza:"gato",
  edad:1,
  imagen:"https://www.vitapets.cl/wp-content/uploads/2020/12/gatos-siames-bebes-cuatro.jpg",
  alt:"gatito"
},
{
  id:"",
  nombre:"perrino",
  raza:"perro",
  edad:4,
  imagen:"",
  alt:"perro"
},
{
  id:"",
  nombre:"conejin",
  raza:"conejo",
  edad:2,
  imagen:"",
  alt:"conejo"
},
]
}

}




