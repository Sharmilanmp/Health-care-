import { TestBed } from '@angular/core/testing';

import { ShashaService } from './shasha.service';

describe('ShashaService', () => {
  let service: ShashaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShashaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
