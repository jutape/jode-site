import { TestBed } from '@angular/core/testing';

import { PresencaService } from './presenca.service';

describe('PresencaService', () => {
  let service: PresencaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresencaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
