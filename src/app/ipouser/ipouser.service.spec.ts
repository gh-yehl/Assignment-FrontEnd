import { TestBed } from '@angular/core/testing';

import { IpouserService } from './ipouser.service';

describe('IpouserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpouserService = TestBed.get(IpouserService);
    expect(service).toBeTruthy();
  });
});
