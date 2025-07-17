import { TestBed } from '@angular/core/testing';

import { requestService } from './request.service';

describe('Request', () => {
  let service: Request;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Request);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
