import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageNurseComponent } from './home-page-nurse.component';

describe('HomePageNurseComponent', () => {
  let component: HomePageNurseComponent;
  let fixture: ComponentFixture<HomePageNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
