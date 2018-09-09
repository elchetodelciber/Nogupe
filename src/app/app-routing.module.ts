import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes creados//
import {PaginadeloginComponent} from './Componentes/paginadelogin/paginadelogin.component';
import {PaginadeInicioComponent} from './Componentes/paginade-inicio/paginade-inicio.component';
import {PaginaderegistroComponent} from './Componentes/paginaderegistro/paginaderegistro.component';
import {ZonaInternaComponent} from './Componentes/zona-interna/zona-interna.component';
import {NotFoundPageComponent} from './Componentes/not-found-page/not-found-page.component';

const routes: Routes = [
  {path:'',component:PaginadeInicioComponent},
  {path:'login', component:PaginadeloginComponent},
  {path:'registro',component:PaginaderegistroComponent},
  {path:'**', component:NotFoundPageComponent},
  {path:'zonainterna', component:ZonaInternaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
