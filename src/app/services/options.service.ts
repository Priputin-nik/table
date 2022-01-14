import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ALL_COLUMNS } from '../consts/all-columns';
import { Column } from '../interfaces/column-interface';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  public allColumns$: Observable<Column[]>;
  private _allColumnsSubject$: BehaviorSubject<Column[]> ;


constructor() { 

  this._allColumnsSubject$ = new BehaviorSubject<Column[]>(ALL_COLUMNS)
    
  this.allColumns$ = this._allColumnsSubject$.asObservable();
  console.log(this.allColumns$);
}
// share()
}