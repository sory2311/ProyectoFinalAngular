import { Component, OnInit } from '@angular/core';
import { ApiDgzService } from '../service/api-dgz.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  planetas: any;

  constructor(private planetasServices: ApiDgzService) { }

  ngOnInit(): void {
    this.getPlanetas();
  }
  getPlanetas(){
    this.planetasServices.getplanetas().subscribe((data:any)=>{
      console.log(data);
      this.planetas=data;
    })
    }
}
