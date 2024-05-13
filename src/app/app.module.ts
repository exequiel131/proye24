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
  SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
