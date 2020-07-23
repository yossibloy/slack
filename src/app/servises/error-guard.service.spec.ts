import { TestBed } from '@angular/core/testing';

import { ErrorGuardService } from './error-guard.service';

describe('ErrorGuardService', () => {
  let service: ErrorGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
