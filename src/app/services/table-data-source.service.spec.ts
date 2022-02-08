/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableDataSourceService } from './table-data-source.service';

describe('Service: TableDataSource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableDataSourceService]
    });
  });

  it('should ...', inject([TableDataSourceService], (service: TableDataSourceService) => {
    expect(service).toBeTruthy();
  }));
});
