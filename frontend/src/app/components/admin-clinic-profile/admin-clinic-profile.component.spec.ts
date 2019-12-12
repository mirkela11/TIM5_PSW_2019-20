import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClinicProfileComponent } from './admin-clinic-profile.component';

describe('AdminClinicProfileComponent', () => {
  let component: AdminClinicProfileComponent;
  let fixture: ComponentFixture<AdminClinicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClinicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClinicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
