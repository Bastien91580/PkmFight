import { TestBed } from '@angular/core/testing';

import { FightServiceService } from './fight-service.service';

describe('FightServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FightServiceService = TestBed.get(FightServiceService);
    expect(service).toBeTruthy();
  });
});
