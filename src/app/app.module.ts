import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//componentes de angular material
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//importamos coponentes globales
import { SharedModule } from './modules/shared/shared.module';

//firebase -importamos herramientas de la base de datoas
import { enviroment } from 'src/enviroments/enviroments';
import {AngularFireModule}  from '@angular/fire/compat';
import {AngularFireAuthModule}  from '@angular/fire/compat/auth';
import {AngularFireStorageModule}  from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    ServiciosComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
//importamos 
    AngularFireModule.initializeApp(enviroment.firebaseConfig), //inicializar firebase dentro del proyecto
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
