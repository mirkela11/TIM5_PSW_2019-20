import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryPatientComponent } from './medical-history-patient.component';

describe('MedicalHistoryPatientComponent', () => {
  let component: MedicalHistoryPatientComponent;
  let fixture: ComponentFixture<MedicalHistoryPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalHistoryPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHistoryPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
