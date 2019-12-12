import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAdminClinicComponent } from './home-page-admin-clinic.component';

describe('HomePageAdminClinicComponent', () => {
  let component: HomePageAdminClinicComponent;
  let fixture: ComponentFixture<HomePageAdminClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageAdminClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageAdminClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
