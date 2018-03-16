import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
            [kendoGridBinding]="gridData"
            [pageSize]="10"
            [pageable]="true"
            [filterable]="true"
            [navigable]="true"
            [height]="410">
            <kendo-grid-column field="ProductID" title="ID" width="40" [filterable]="false">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="200">
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price" width="120" filter="numeric">
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = products;
}
