import { TestBed } from '@angular/core/testing';

import { AircraftSightingsService } from './aircraft-sightings.service';

describe('AircraftSightingsService', () => {
  let service: AircraftSightingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AircraftSightingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
