import { Component } from '@angular/core';
import { filterBy, CompositeFilterDescriptor, DataResult } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

import {
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
    <kendo-grid
            [data]="gridData"
            [filter]="filter"
            [filterable]="true"
            (filterChange)="filterChange($event)"
        >
        <kendo-grid-column field="ProductID" title="Product ID" width="120" [filterable]="false">
        </kendo-grid-column>
        <kendo-grid-column field="ProductName" title="Product Name">
        </kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" width="230" filter="numeric">
        </kendo-grid-column>
    </kendo-grid>
`
})
export class AppComponent {
    public filter: CompositeFilterDescriptor;
    public gridData: any[] = filterBy(sampleProducts, this.filter);

    public filterChange(filter: CompositeFilterDescriptor): void {
        this.filter = filter;
        this.gridData = filterBy(sampleProducts, this.filter);
    }
}
