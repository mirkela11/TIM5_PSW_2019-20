import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSearchDialogComponent } from './doctor-search-dialog.component';

describe('DoctorSearchDialogComponent', () => {
  let component: DoctorSearchDialogComponent;
  let fixture: ComponentFixture<DoctorSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
