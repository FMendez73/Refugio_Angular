import { TestBed } from '@angular/core/testing';

import { AnimalesService } from './refugio.service';

describe('TaqueriasService', () => {
  let service: AnimalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
