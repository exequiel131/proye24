import { Injectable } from '@angular/core';
//servicio de la nube de autentificacion de firebase 
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //el constructor inicializa un objeto  / le da vida 

  //referenciar auth service de firebase en el servicio
  constructor(public auth: AngularFireAuth) { 
  }

 //FUNCION PARA REGISTRAR
  registrar (email: string, password:string){
    return this.auth.createUserWithEmailAndPassword(email, password) }


  //FUNCION PARA INICIAR SESION
iniciosesion (email: string, password:string){
//validar la informacion del usaurio saber si existe en la coleccion
return this.auth.signInWithEmailAndPassword(email, password) }

//FUNCION PARA CERRAR SESION
cerrarsesion (){
  //devuelve una promesa vacia quita token
  return this.auth.signOut();
}

  //funcion para tomar el uid





}
  


  
