import { TestBed } from '@angular/core/testing';

import { PresenteService } from './presente.service';

describe('PresentesService', () => {
  let service: PresenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
