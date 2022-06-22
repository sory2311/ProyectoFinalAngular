import { TestBed } from '@angular/core/testing';

import { ApiDgzService } from './api-dgz.service';

describe('ApiDgzService', () => {
  let service: ApiDgzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDgzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
