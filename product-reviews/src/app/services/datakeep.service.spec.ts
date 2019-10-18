import { TestBed } from '@angular/core/testing';

import { DatakeepService } from './datakeep.service';

describe('DatakeepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatakeepService = TestBed.get(DatakeepService);
    expect(service).toBeTruthy();
  });
});
