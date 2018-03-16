import { Component } from '@angular/core';
import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData">
          <kendo-grid-column field="ProductName" title="Product Name" [width]="160">
          </kendo-grid-column>
          <kendo-grid-column field="Category" title="Category" [width]="400">
              <ng-template kendoGridCellTemplate let-dataItem>
                  <div *ngIf="dataItem.Category">
                    <h3>{{dataItem.Category?.CategoryName}}</h3>
                    <p>{{dataItem.Category?.Description}}</p>
                  </div>
              </ng-template>
          </kendo-grid-column>
          <kendo-grid-column field="UnitPrice" title="Unit Price" [width]="120">
          </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = sampleProducts;
}
