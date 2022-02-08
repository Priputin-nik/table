import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterComponent } from './filter/filter.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ENVIRONMENTS_PROVIDERS } from 'src/environments/environment-providers';

@NgModule({
  declarations: [	
    AppComponent,
    TableComponent,
    FilterComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule,
    DragDropModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [...ENVIRONMENTS_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
