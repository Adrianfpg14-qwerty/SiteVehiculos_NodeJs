import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMultaComponent } from './crear-multa.component';

describe('CrearMultaComponent', () => {
  let component: CrearMultaComponent;
  let fixture: ComponentFixture<CrearMultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
