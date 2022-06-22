import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { AuthGuard } from './auth/auth.guard';
import { CrearPersonajeComponent } from './componentes/crear-personaje/crear-personaje.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'personajes', component: PersonajesComponent, canActivate:[AuthGuard]},
  {path: 'crear-personaje', component: CrearPersonajeComponent},
  {path: '', pathMatch: 'full', redirectTo:'/home'},
  
  { path: 'planeta', loadChildren: () => import('./planeta/planeta.module').then(m => m.PlanetaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
