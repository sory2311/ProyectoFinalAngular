import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './componentes/cards/cards.component';
import { AuthModule } from '@auth0/auth0-angular';
import { CrearPersonajeComponent } from './componentes/crear-personaje/crear-personaje.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PersonajesComponent,
    CardsComponent,
    CrearPersonajeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-hniz36s1.us.auth0.com',
      clientId: '7oBTMS41X8NCD6mRUnpCjQkU4myr541V'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
