import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseListPatientComponent } from './nurse-list-patient.component';

describe('NurseListPatientComponent', () => {
  let component: NurseListPatientComponent;
  let fixture: ComponentFixture<NurseListPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseListPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseListPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
