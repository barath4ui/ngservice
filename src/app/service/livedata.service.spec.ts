import { TestBed } from '@angular/core/testing';

import { LivedataService } from './livedata.service';

describe('LivedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivedataService = TestBed.get(LivedataService);
    expect(service).toBeTruthy();
  });
});
