import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordDialogComponent } from './medical-record-dialog.component';

describe('MedicalRecordDialogComponent', () => {
  let component: MedicalRecordDialogComponent;
  let fixture: ComponentFixture<MedicalRecordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRecordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
