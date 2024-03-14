import { TestBed } from '@angular/core/testing';

import { RequestBookingService } from './request-booking.service';

describe('RequestBookingService', () => {
  let service: RequestBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
