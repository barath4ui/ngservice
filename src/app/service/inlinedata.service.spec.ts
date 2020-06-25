import { TestBed } from '@angular/core/testing';

import { InlinedataService } from './inlinedata.service';

describe('InlinedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InlinedataService = TestBed.get(InlinedataService);
    expect(service).toBeTruthy();
  });
});
