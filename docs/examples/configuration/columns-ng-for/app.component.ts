import { Component } from '@angular/core';
import { sampleProducts } from './products';

interface ColumnSetting {
  field: string;
  title: string;
  format?: string;
  type: 'text' | 'numeric' | 'boolean' | 'date';
}

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid
        [kendoGridBinding]="gridData"
        [filterable]="true"
        scrollable="none"
        >
        <kendo-grid-column
          *ngFor="let column of columns"
          field="{{column.field}}"
          title="{{column.title}}"
          format="{{column.format}}"
          filter="{{column.type}}"
        ></kendo-grid-column>
      </kendo-grid>
  `
})
export class AppComponent {
  public gridData: any[] = sampleProducts;

  public columns: ColumnSetting[] = [
    {
      field: 'ProductName',
      title: 'Product Name',
      type: 'text'
    }, {
      field: 'UnitPrice',
      format: '{0:c}',
      title: 'Unit Price',
      type: 'numeric'
    }, {
      field: 'FirstOrderedOn',
      format: '{0:d}',
      title: 'First Ordered',
      type: 'date'
    }
  ];
}
