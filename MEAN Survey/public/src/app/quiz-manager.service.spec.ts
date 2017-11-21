import { TestBed, inject } from '@angular/core/testing';

import { QuizManagerService } from './quiz-manager.service';

describe('QuizManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizManagerService]
    });
  });

  it('should be created', inject([QuizManagerService], (service: QuizManagerService) => {
    expect(service).toBeTruthy();
  }));
});
