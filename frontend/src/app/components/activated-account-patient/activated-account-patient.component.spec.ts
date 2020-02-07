import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedAccountPatientComponent } from './activated-account-patient.component';

describe('ActivatedAccountPatientComponent', () => {
  let component: ActivatedAccountPatientComponent;
  let fixture: ComponentFixture<ActivatedAccountPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatedAccountPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedAccountPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
