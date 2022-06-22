import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiDgzService {
  private url = 'https://dragonball-api.herokuapp.com/dragonball/api/';
  private userId = '5efcfaa75849e818f860cb37';

  constructor(private http: HttpClient) { }

  getpersonajes(){
    return this.http.get(this.url + 'character/all');
  }
  getplanetas(){
    return this.http.get(this.url + 'planet/all');
  }
  guardarPersonaje(personajes:any){
    return this.http.post(this.url + 'character/' + this.userId, personajes)
  }
}
