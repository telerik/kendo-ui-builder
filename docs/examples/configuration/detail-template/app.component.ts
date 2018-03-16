import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid
          [data]="gridView"
          [selectable]="true"
          style="height:400px"
        >
        <kendo-grid-column field="ProductName" title="Product" [width]="300"></kendo-grid-column>
        <kendo-grid-column field="ProductID" title="ID" [width]="50"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" [width]="100"></kendo-grid-column>
        <kendo-grid-column field="QuantityPerUnit" title="Qty Per Unit"></kendo-grid-column>
        <ng-template kendoGridDetailTemplate let-dataItem>
          <section *ngIf="dataItem.Category">
            <p><strong>In Stock:</strong> {{dataItem.UnitsInStock}} units</p>
            <p><strong>On Order:</strong> {{dataItem.UnitsOnOrder}} units</p>
            <p><strong>Reorder Level:</strong> {{dataItem.ReorderLevel}} units</p>
            <p><strong>Discontinued:</strong> {{dataItem.Discontinued}}</p>
            <p><strong>Category:</strong> {{dataItem.Category?.CategoryName}} - {{dataItem.Category?.Description}}</p>
          </section>
        </ng-template>
      </kendo-grid>
  `
})
export class AppComponent {
    public gridView: any[] = products;
}
