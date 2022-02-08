import { Observable } from "rxjs";
import { PeriodicElement } from "../interfaces/table-content";

export abstract class TableDataSource {
  abstract getProducts(): Observable<PeriodicElement[]>;
}

