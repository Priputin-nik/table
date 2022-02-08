import { Provider } from "@angular/core";
import { TabldeDateMockService } from "src/app/services/filing-table.service";
import { TableDataSource } from "src/app/services/table-data-source";

export const ENVIRONMENTS_PROVIDERS: Provider[] = [
  {
    provide: TableDataSource,
    useClass: TabldeDateMockService,
  }
]