import { TestBed, inject } from '@angular/core/testing';

import { TestManagerService } from './test-manager.service';

describe('TestManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestManagerService]
    });
  });

  it('should be created', inject([TestManagerService], (service: TestManagerService) => {
    expect(service).toBeTruthy();
  }));
});
