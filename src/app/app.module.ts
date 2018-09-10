import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginadeInicioComponent } from './Componentes/paginade-inicio/paginade-inicio.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { PaginadeloginComponent } from './Componentes/paginadelogin/paginadelogin.component';
import { PaginaderegistroComponent } from './Componentes/paginaderegistro/paginaderegistro.component';
import { NotFoundPageComponent } from './Componentes/not-found-page/not-found-page.component';
import {ZonaInternaComponent} from './Componentes/zona-interna/zona-interna.component';
//angular material y animation

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MiMaterial} from './Material/material';

//enviroment fire
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireModule } from '@angular/fire';

//servicios
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginadeInicioComponent,
    NavbarComponent,
    PaginadeloginComponent,
    PaginaderegistroComponent,
    NotFoundPageComponent,
    ZonaInternaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MiMaterial,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [AuthService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
