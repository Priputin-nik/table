/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TabldeDateMockService } from './filing-table.service';

describe('Service: FilingTable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabldeDateMockService]
    });
  });

  it('should ...', inject([TabldeDateMockService], (service: TabldeDateMockService) => {
    expect(service).toBeTruthy();
  }));
});
