import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePatientComponent } from './home-page-patient.component';

describe('HomePagePatientComponent', () => {
  let component: HomePagePatientComponent;
  let fixture: ComponentFixture<HomePagePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
