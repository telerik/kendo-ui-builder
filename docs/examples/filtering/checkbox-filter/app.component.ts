import { Component } from '@angular/core';
import { filterBy, FilterDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const flatten = filter => {
    const filters = filter.filters;
    if (filters) {
        return filters.reduce((acc, curr) => acc.concat(curr.filters ? flatten(curr) : [curr]), []);
    }
    return [];
};

@Component({
    selector: 'my-app',
    template: `
<kendo-grid
        [data]="gridData"
        [filter]="filter"
        [filterable]="true"
        (filterChange)="filterChange($event)"
        [height]="400"
    >
    <kendo-grid-column field="ProductName" title="Product Name">
    </kendo-grid-column>
    <kendo-grid-column field="UnitPrice" title="Unit Price" width="230" filter="numeric">
    </kendo-grid-column>
    <kendo-grid-column field="Discontinued" width="120">
        <ng-template kendoGridFilterCellTemplate>
            <kendo-switch
                (valueChange)="switchChange($event)"
                offLabel="No"
                [checked]="checked"
                onLabel="Yes">
            </kendo-switch>
        </ng-template>
        <ng-template kendoGridCellTemplate let-dataItem>
            <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
        </ng-template>
    </kendo-grid-column>
    </kendo-grid>
`
})
export class AppComponent {

    public checked = false;
    public filter: CompositeFilterDescriptor;
    public gridData: any[] = filterBy(sampleProducts, this.filter);

    public filterChange(filter: CompositeFilterDescriptor): void {
        this.filter = filter;
        this.gridData = filterBy(sampleProducts, filter);
    }

    public switchChange(checked: boolean): void {
        const root = this.filter || { logic: 'and', filters: []};

        const [filter] = flatten(root).filter(x => x.field === 'Discontinued');

        if (!filter) {
            root.filters.push({
                field: 'Discontinued',
                operator: 'eq',
                value: checked
            });
        } else {
            filter.value = checked;
        }
        this.checked = checked;
        this.filterChange(root);
    }
}
