import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsService } from '../services/options.service';
import { map } from 'rxjs/operators';
import { Column } from '../interfaces/column-interface';
import { ELEMENT_DATA } from '../consts/element-data';
import { TabldeDateMockService } from '../services/filing-table.service';
import { TableDataSource } from '../services/table-data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public dataSource = this.fillingTable.arrayForRender;
  public columns: Column[] = [];
  public culumnsNames$: Observable<string[]>;
 

  constructor(private optionsService: OptionsService, private fillingTable: TableDataSource) {
    this.culumnsNames$ = optionsService.allColumns$.pipe(map((columns: Column[]) => columns.filter((item) => item.display).map( (column: Column) => column.columnDef)));

  }

  ngOnInit() {
  }

  checkCeckbox(event:boolean, id: number) {
    this.dataSource.forEach(item => item.id == id ? item.selected = event : 0);
  }
}