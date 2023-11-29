/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResetaService } from './reseta.service';

describe('Service: Reseta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetaService]
    });
  });

  it('should ...', inject([ResetaService], (service: ResetaService) => {
    expect(service).toBeTruthy();
  }));
});
