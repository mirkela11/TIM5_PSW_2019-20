import { TestBed } from '@angular/core/testing';

import { RegisterRequestService } from './register-request.service';

describe('RegisterRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterRequestService = TestBed.get(RegisterRequestService);
    expect(service).toBeTruthy();
  });
});
