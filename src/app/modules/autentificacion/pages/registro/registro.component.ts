import { Component } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
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

  // FUNCIÓN PARA EL REGISTRO DE NUEVOS USUARIOS
  registrar() {
    // constante credenciales va a resguardar la información que ingrese el usuario
    const credenciales = {
      uid: this.usuarios.uid, // definimos al atributo de la interfaz con una variable local
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password,
    }

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
  }
}
