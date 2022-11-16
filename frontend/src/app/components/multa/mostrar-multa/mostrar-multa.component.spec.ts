import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMultaComponent } from './mostrar-multa.component';

describe('MostrarMultaComponent', () => {
  let component: MostrarMultaComponent;
  let fixture: ComponentFixture<MostrarMultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarMultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
