import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ALL_COLUMNS } from '../consts/all-columns';
import { Column } from '../interfaces/column-interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  public allColumns$: Observable<Column[]>;
  public mapStaticTrue: Map<Column, number>;
  public numberVisibleColumns: number;
  private _allColumnsSubject$: BehaviorSubject<Column[]>;

constructor() {
  this._allColumnsSubject$ = new BehaviorSubject<Column[]>(ALL_COLUMNS)
  this.allColumns$ = this._allColumnsSubject$.asObservable();
  this.mapStaticTrue = this.getStaticTrue();
  this.numberVisibleColumns = this._allColumnsSubject$.getValue().filter(item => item.static === false).filter(item => 
    item.display == true).length;

}

  getStaticTrue(): Map<Column, number> {
    const mapStaticTrue = new Map();
    this._allColumnsSubject$.getValue().map((item, index) => {
      if (item.static) {
        mapStaticTrue.set(item,index);
      }
    });
    return mapStaticTrue
  }

  moveColumns(event: CdkDragDrop<string[]>): void {
    const columns = this._allColumnsSubject$.getValue().filter(item => item.static === false);
    moveItemInArray(columns, event.previousIndex, event.currentIndex);
    const columnsStatic = this.mapStaticTrue.entries();
    for (let item of columnsStatic) { 
      columns.splice(item[1], 0, item[0])
    }
    this._allColumnsSubject$.next(columns);
  }

  showHiddenColumn(nameColumn: string):void {
    const visibleColumns = this._allColumnsSubject$.getValue();
 
    visibleColumns.forEach(element => {
      if (element.columnDef == nameColumn) {
        element.display = !element.display;
      }
    });
    this._allColumnsSubject$.next(visibleColumns);
    this.numberVisibleColumns = this._allColumnsSubject$.getValue().filter(item => 
      item.display == true).length;
  }

  showAllColumns() {
    let allInvisibleColumns = this._allColumnsSubject$.getValue().map(item => {
      if (item.display == false) {
        item.display = true
      }
      return item
    });
    this._allColumnsSubject$.next(allInvisibleColumns);
  }

  countLengthDisplayList():number {
    this.numberVisibleColumns = this._allColumnsSubject$.getValue().filter(item => item.static === false).filter(item => 
      item.display == true).length;
      return this.numberVisibleColumns
  }
}