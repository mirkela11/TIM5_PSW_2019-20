import { TestBed } from '@angular/core/testing';

import { ClinicalCentreAdministratorService } from './clinical-centre-administrator.service';

describe('ClinicalCentreAdministratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicalCentreAdministratorService = TestBed.get(ClinicalCentreAdministratorService);
    expect(service).toBeTruthy();
  });
});
