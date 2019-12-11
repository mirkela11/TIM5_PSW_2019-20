import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageClinicalCentreAdministratorComponent } from './home-page-clinical-centre-administrator.component';

describe('HomePageClinicalCentreAdministratorComponent', () => {
  let component: HomePageClinicalCentreAdministratorComponent;
  let fixture: ComponentFixture<HomePageClinicalCentreAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageClinicalCentreAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageClinicalCentreAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
