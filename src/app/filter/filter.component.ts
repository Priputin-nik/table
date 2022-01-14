import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Column } from '../interfaces/column-interface';
import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public toppingList$: Observable<Column[]>;
  public g: EventEmitter<string>;
  public a: string = 'string';

  constructor(private optionsService: OptionsService) {
    this.toppingList$ = optionsService.allColumns$;
    // this.toppingList = optionsService.displayColumns
    this.g = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleDisplayState(nameColumn:string):void {
    this.a = nameColumn;
    console.log(this.a);
    console.log(nameColumn);
    console.log('nameColumn');

    }


}