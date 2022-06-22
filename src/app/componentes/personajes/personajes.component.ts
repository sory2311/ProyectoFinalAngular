import { Component, OnInit } from '@angular/core';
import { ApiDgzService } from 'src/app/service/api-dgz.service';

export interface Personajes {
  name: string,
  description: string,
  url_image:string
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: Personajes[] = [];

  constructor(private personajesServices: ApiDgzService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }
  getPersonajes(){
  this.personajesServices.getpersonajes().subscribe((data:any)=>{
    console.log(data);
    this.personajes=data;
  })
  }
}
