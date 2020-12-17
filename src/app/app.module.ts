import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CrearEstudianteComponent } from './componentes/crear-estudiante/crear-estudiante.component';
import { ListaEstudiantesComponent } from './componentes/lista-estudiantes/lista-estudiantes.component';

//PRIMENG
import {InputTextModule} from 'primeng/inputtext';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { HeaderComponent } from './componentes/header/header.component';
import {CardModule} from 'primeng/card';





@NgModule({
  declarations: [
    AppComponent,
    CrearEstudianteComponent,
    ListaEstudiantesComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
