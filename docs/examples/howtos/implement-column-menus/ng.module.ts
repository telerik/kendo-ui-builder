import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { MultiSelectModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';
import { ColumnChooserComponent } from './column-chooser.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    MultiSelectModule,
    SortableModule
  ],
  declarations: [AppComponent, ColumnChooserComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
