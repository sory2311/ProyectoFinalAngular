import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDgzService } from 'src/app/service/api-dgz.service';

@Component({
  selector: 'app-crear-personaje',
  templateUrl: './crear-personaje.component.html',
  styleUrls: ['./crear-personaje.component.css']
})
export class CrearPersonajeComponent implements OnInit {

  forma:FormGroup;

  constructor(private fb: FormBuilder,
              private apidgzService:ApiDgzService,  
              private router: Router) { 
                this.forma = this.fb.group({
                 nombre: ['', [Validators.required, Validators.minLength(3)]],
                  descripcion:['', [Validators.required, Validators.minLength(3)]],
                  //plataforma:['', [Validators.required, Validators.minLength(3)]],
                  imagen:['', [Validators.required]],    
                })
              }

  ngOnInit(): void {
  }
guardar(){
  let obj = {
    name: this.forma.get('nombre')?.value,
    description: this.forma.get('descripcion')?.value,
    url_image: this.forma.get('imagen')?.value,
    gender: '',
    species: '',
    status: 'Vivo',
    type: '',
    planetId: '5efa3443fb6872008455897b'
    }
  this.apidgzService.guardarPersonaje(obj).subscribe((respuesta:any) =>{
    console.log(respuesta);
  });
  this.router.navigate(['/personajes'])  
}

}
