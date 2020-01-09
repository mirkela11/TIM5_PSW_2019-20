import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordPatientComponent } from './medical-record-patient.component';

describe('MedicalRecordPatientComponent', () => {
  let component: MedicalRecordPatientComponent;
  let fixture: ComponentFixture<MedicalRecordPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRecordPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
