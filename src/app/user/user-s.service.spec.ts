import { TestBed, inject } from '@angular/core/testing';

import { UserSService } from './user-s.service';

describe('UserSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSService]
    });
  });

  it('should be created', inject([UserSService], (service: UserSService) => {
    expect(service).toBeTruthy();
  }));
});
