import { Provider } from "@angular/core";
import { TableDataSource } from "src/app/services/table-data-source";
import { TableDataSourceService } from "src/app/services/table-data-source.service";

export const ENVIRONMENTS_PROVIDERS: Provider[] = [
  {
    provide: TableDataSource,
    useClass: TableDataSourceService,
  }
]