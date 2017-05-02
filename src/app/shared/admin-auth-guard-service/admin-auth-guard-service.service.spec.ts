import { TestBed, inject } from '@angular/core/testing';

import { AdminAuthGuardServiceService } from './admin-auth-guard-service.service';

describe('AdminAuthGuardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuardServiceService]
    });
  });

  it('should ...', inject([AdminAuthGuardServiceService], (service: AdminAuthGuardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
