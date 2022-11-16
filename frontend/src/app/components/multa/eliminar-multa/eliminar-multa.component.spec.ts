import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMultaComponent } from './eliminar-multa.component';

describe('EliminarMultaComponent', () => {
  let component: EliminarMultaComponent;
  let fixture: ComponentFixture<EliminarMultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
