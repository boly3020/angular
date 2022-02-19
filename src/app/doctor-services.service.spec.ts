import { TestBed } from '@angular/core/testing';

import { DoctorServicesService } from './doctor-services.service';

describe('DoctorServicesService', () => {
  let service: DoctorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
