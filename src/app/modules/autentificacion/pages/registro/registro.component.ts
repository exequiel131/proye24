import { Component } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
//importamos servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//importamoss componente de rutas de angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;
  // IMPORTAR LA INTERFAZ DE USUARIO -> INICIALIZAR

  usuarios: usuario = {
    uid: '', // -> inicializamos con comillas simples porque es tipo STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  // CREAMOS COLECCIÓN DE USUARIOS, TIPO 'USUARIO' PARA ARRAYS
  coleccionusuarios: usuario[] = [];

  constructor (
    public serviceAuth: AuthService ,
    public ServicioRutas: Router ,
  ){

  };
  // FUNCIÓN PARA EL REGISTRO DE NUEVOS USUARIOS
 async registrar(){
    // constante credenciales va a resguardar la información que ingrese el usuario
    /*const credenciales = {
      uid: this.usuarios.uid, // definimos al atributo de la interfaz con una variable local
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password,
    } */
const credenciales= {
  email: this.usuarios.email,
  password: this.usuarios.password,
}

const res = await this.serviceAuth.registrar(credenciales.email, credenciales.password)
//es un valor
.then(res =>{
  alert("se pudo registrar con exito");
  //el metodo navigate nos redirecciona a otra vista
this.ServicioRutas.navigate(['/inicio'])
})
//el metodo cath captura un error y la vuelve un error cuando la promesa sale mal
.catch(error =>{
  alert("hubo un problema al registar el usuario :( \n"+error)
})
  }
  /*
    //enviamos nueva informacion como un nuevo objeto a la coleccion de usuarios
    this.coleccionusuarios.push(credenciales);

    alert("!te registraste con exito¡");

    //llamamos a la funcion limpiar del formulario
    this.limpiar(),

    //mostramos las credenciales por consola
    console.log(this.coleccionusuarios);

    //usamos local storage para guardar los datos
    localStorage.setItem('user', JSON.stringify(this.coleccionusuarios))



  }
  //funcion para limpiar los inputs del formulario
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
  }*/
}
