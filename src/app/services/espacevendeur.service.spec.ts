import { TestBed } from '@angular/core/testing';

import { EspacevendeurService } from './espacevendeur.service';

describe('EspacevendeurService', () => {
  let service: EspacevendeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspacevendeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
