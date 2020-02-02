import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseDatePickerComponent } from './nurse-date-picker.component';

describe('NurseDatePickerComponent', () => {
  let component: NurseDatePickerComponent;
  let fixture: ComponentFixture<NurseDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
