import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorVacationRequestComponent } from './doctor-vacation-request.component';

describe('DoctorVacationRequestComponent', () => {
  let component: DoctorVacationRequestComponent;
  let fixture: ComponentFixture<DoctorVacationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorVacationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorVacationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
