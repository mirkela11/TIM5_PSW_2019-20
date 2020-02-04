import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefExaminationDialogComponent } from './predef-examination-dialog.component';

describe('PredefExaminationDialogComponent', () => {
  let component: PredefExaminationDialogComponent;
  let fixture: ComponentFixture<PredefExaminationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefExaminationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefExaminationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
