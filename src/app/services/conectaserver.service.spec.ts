import { TestBed } from '@angular/core/testing';

import { ConectaserverService } from './conectaserver.service';

describe('ConectaserverService', () => {
  let service: ConectaserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectaserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
