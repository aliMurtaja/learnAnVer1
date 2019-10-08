import { TestBed } from '@angular/core/testing';

import { MyserviceonapplevelService } from './myserviceonapplevel.service';

describe('MyserviceonapplevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyserviceonapplevelService = TestBed.get(MyserviceonapplevelService);
    expect(service).toBeTruthy();
  });
});
