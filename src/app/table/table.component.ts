import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsService } from '../services/options.service';
import { filter, map } from 'rxjs/operators';
import { Column } from '../interfaces/column-interface';
import { ELEMENT_DATA } from '../consts/element-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public dataSource = ELEMENT_DATA;
  public selectedCell: boolean;
  public columns: Column[] = [];
  public culumnsNames$: Observable<string[]>;
  
  constructor(private optionsService: OptionsService) {
    this.selectedCell = false;
    this.culumnsNames$ = optionsService.allColumns$.pipe(map((columns: Column[]) => columns.filter((item) => item.display).map( (column: Column) => column.columnDef)));
   }

  ngOnInit() {
  }
}