import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMedicosComponent } from './registro-medicos.component';

describe('RegistroMedicosComponent', () => {
  let component: RegistroMedicosComponent;
  let fixture: ComponentFixture<RegistroMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
