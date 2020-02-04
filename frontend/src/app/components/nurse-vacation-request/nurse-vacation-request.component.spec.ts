import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseVacationRequestComponent } from './nurse-vacation-request.component';

describe('NurseVacationRequestComponent', () => {
  let component: NurseVacationRequestComponent;
  let fixture: ComponentFixture<NurseVacationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseVacationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseVacationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
