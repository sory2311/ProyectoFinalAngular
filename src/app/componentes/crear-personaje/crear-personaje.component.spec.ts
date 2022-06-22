import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPersonajeComponent } from './crear-personaje.component';

describe('CrearPersonajeComponent', () => {
  let component: CrearPersonajeComponent;
  let fixture: ComponentFixture<CrearPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
