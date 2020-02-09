import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDoctorAndClinicPatientComponent } from './rate-doctor-and-clinic-patient.component';

describe('RateDoctorAndClinicPatientComponent', () => {
  let component: RateDoctorAndClinicPatientComponent;
  let fixture: ComponentFixture<RateDoctorAndClinicPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDoctorAndClinicPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDoctorAndClinicPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
