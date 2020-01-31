import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListPatientComponent } from './doctor-list-patient.component';

describe('DoctorListPatientComponent', () => {
  let component: DoctorListPatientComponent;
  let fixture: ComponentFixture<DoctorListPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorListPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
