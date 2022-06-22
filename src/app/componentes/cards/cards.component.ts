import { Component, OnInit, Input } from '@angular/core';
import { Personajes } from '../personajes/personajes.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() dataInput:Personajes = {name:"",description:"",url_image:""};

  constructor() { }

  ngOnInit(): void {
  }

}
