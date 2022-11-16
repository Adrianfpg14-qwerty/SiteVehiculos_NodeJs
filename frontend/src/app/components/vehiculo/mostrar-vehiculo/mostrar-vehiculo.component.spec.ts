import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVehiculoComponent } from './mostrar-vehiculo.component';

describe('MostrarVehiculoComponent', () => {
  let component: MostrarVehiculoComponent;
  let fixture: ComponentFixture<MostrarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
