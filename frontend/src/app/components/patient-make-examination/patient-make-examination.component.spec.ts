import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMakeExaminationComponent } from './patient-make-examination.component';

describe('PatientMakeExaminationComponent', () => {
  let component: PatientMakeExaminationComponent;
  let fixture: ComponentFixture<PatientMakeExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMakeExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMakeExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
