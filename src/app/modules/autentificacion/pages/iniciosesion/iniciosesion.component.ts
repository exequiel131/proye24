import { Component } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
public  coleccionusuariosLocales: usuario[];
constructor(){
  this.coleccionusuariosLocales = [
    {
    uid: '',
    nombre: 'seba',
    apellido: 'doune',
    email: 'doune@gmail.com',
    rol: 'admin',
    password: 'chaka',
  },
  {
    uid: '',
    nombre: 'facu',
    apellido: 'tapia',
    email: 'tapia@gmail.com',
    rol: 'admin',
    password: 'micha',
  },
  {
    uid: '',
    nombre: 'exe',
    apellido: 'lleubul',
    email: 'lleubul@gmail.com',
    rol: 'admin',
    password: 'chimusita',
  },
]
}
  //definimos la interfaz de usuario
  usuarios: usuario = {
    uid: '', // -> inicializamos con comillas simples porque es tipo STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  } 

  iniciarsesion (){
    const credenciales = {
      uid:this.usuarios.uid,
      nombre:this.usuarios.nombre,
      apellido:this.usuarios.apellido,
      email:this.usuarios.email,
      rol:this.usuarios.rol,
      password:this.usuarios.password,
    }
    for(let i = 0; i <this.coleccionusuariosLocales.length; i ++){
const usuariolocal = this.coleccionusuariosLocales [i];

if(usuariolocal.nombre === credenciales.nombre && usuariolocal.apellido === credenciales.apellido &&
   usuariolocal.email === credenciales.email && usuariolocal.rol === credenciales.rol && usuariolocal.password === credenciales.password){
   alert("ingresaste con exito");
break;
   }else{
    alert("ocurrio un problema al inmciar sesion");
    break;
   }



    }
  }
  limpiar() {
    //en constante inputs llamamos a los atributos y los inicializamos 
    //como vacios
      const inputs = {
        uid: this.usuarios.uid = "",
        nombre: this.usuarios.nombre = "",
        apellido: this.usuarios.apellido = "",
        email: this.usuarios.email = "",
        rol: this.usuarios.rol = "",
        password: this.usuarios.password = "",
      }
    }
}
