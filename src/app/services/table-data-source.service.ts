import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PeriodicElement } from '../interfaces/table-content';
import { TableDataSource } from './table-data-source';

@Injectable({
  providedIn: 'root'
})
export class TableDataSourceService implements  TableDataSource {

  getProducts(): Observable<PeriodicElement[]> {
    return of()
  }
}
