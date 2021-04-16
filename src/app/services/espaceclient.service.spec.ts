import { TestBed } from '@angular/core/testing';

import { EspaceclientService } from './espaceclient.service';

describe('EspaceclientService', () => {
  let service: EspaceclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspaceclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
