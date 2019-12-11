import { TestBed } from '@angular/core/testing';

import { IpoadminService } from './ipoadmin.service';

describe('IpoadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpoadminService = TestBed.get(IpoadminService);
    expect(service).toBeTruthy();
  });
});
