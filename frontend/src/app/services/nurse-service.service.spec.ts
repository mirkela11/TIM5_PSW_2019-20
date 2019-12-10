import { TestBed } from '@angular/core/testing';

import { NurseServiceService } from './nurse-service.service';

describe('NurseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NurseServiceService = TestBed.get(NurseServiceService);
    expect(service).toBeTruthy();
  });
});
