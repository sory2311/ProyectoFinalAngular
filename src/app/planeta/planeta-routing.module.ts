import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetaComponent } from './planeta.component';

const routes: Routes = [{ path: '', component: PlanetaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetaRoutingModule { }
