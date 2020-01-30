import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSearchDialogComponent } from './clinic-search-dialog.component';

describe('ClinicSearchDialogComponent', () => {
  let component: ClinicSearchDialogComponent;
  let fixture: ComponentFixture<ClinicSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
