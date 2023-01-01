import { TestBed } from '@angular/core/testing';

import { MydevdayService } from './mydevday.service';

describe('MydevdayService', () => {
  let service: MydevdayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydevdayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
