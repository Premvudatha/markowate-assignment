import { TestBed } from '@angular/core/testing';

import { CrudangularService } from './crudangular.service';

describe('CrudangularService', () => {
  let service: CrudangularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudangularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
