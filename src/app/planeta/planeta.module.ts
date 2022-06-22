import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetaRoutingModule } from './planeta-routing.module';
import { PlanetaComponent } from './planeta.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PlanetaComponent
  ],
  imports: [
    CommonModule,
    PlanetaRoutingModule,
    HttpClientModule
  ]
})
export class PlanetaModule { }
