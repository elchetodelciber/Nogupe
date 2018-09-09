import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginadeInicioComponent } from './componentes/paginade-inicio/paginade-inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PaginadeloginComponent } from './componentes/paginadelogin/paginadelogin.component';
import { PaginaderegistroComponent } from './componentes/paginaderegistro/paginaderegistro.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginadeInicioComponent,
    NavbarComponent,
    PaginadeloginComponent,
    PaginaderegistroComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
