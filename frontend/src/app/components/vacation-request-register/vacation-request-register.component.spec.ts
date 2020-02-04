import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestRegisterComponent } from './vacation-request-register.component';

describe('VacationRequestRegisterComponent', () => {
  let component: VacationRequestRegisterComponent;
  let fixture: ComponentFixture<VacationRequestRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationRequestRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationRequestRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
