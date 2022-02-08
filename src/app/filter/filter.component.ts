import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Column } from '../interfaces/column-interface';
import { OptionsService } from '../services/options.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
 
  public toppingList$: Observable<Column[]>;
  public numItem$: Observable<Column[]>;


  constructor(private optionsService: OptionsService) {
    this.toppingList$ = optionsService.allColumns$.pipe(map(item => item.filter(item => item.static === false)));
    this.numItem$ = this.toppingList$.pipe(map(item => item.filter(item => item.static === false).filter(item => item.display === true)));
  }

  ngOnInit() {

  }

    drop(event: CdkDragDrop<string[]>) {
      this.optionsService.moveColumns(event);
    }

    showHiddenColumn(event: string): void {
      this.optionsService.showHiddenColumn(event);
    }

    showAll(){
      this.optionsService.showAllColumns();
    }

    countLengthDisplayList():number {
      return this.optionsService.countLengthDisplayList()
      
    }
    
}
