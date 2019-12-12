import { TestBed } from '@angular/core/testing';

import { AdminClinicService } from './admin-clinic.service';

describe('AdminClinicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminClinicService = TestBed.get(AdminClinicService);
    expect(service).toBeTruthy();
  });
});
