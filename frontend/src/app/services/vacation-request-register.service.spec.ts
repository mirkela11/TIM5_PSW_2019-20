import { TestBed } from '@angular/core/testing';

import { VacationRequestRegisterService } from './vacation-request-register.service';

describe('VacationRequestRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacationRequestRegisterService = TestBed.get(VacationRequestRegisterService);
    expect(service).toBeTruthy();
  });
});
