import { Component } from '@angular/core';
import { filterBy, FilterDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { sampleProducts } from './products';
import { FilterService } from '@progress/kendo-angular-grid';

const flatten = filter => {
    const filters = (filter || {}).filters;
    if (filters) {
        return filters.reduce((acc, curr) => acc.concat(curr.filters ? flatten(curr) : [curr]), []);
    }
    return [];
};

const distinctCategories = data => data
    .map(x => x.Category)
    .filter((x, idx, xs) => xs.findIndex(y => y.CategoryName === x.CategoryName) === idx);

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
                [data]="gridData"
                [filter]="filter"
                filterable="menu"
                (filterChange)="filterChange($event)"
                [height]="400"
            >
            <kendo-grid-column field="ProductName" title="Product Name">
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Unit Price" width="130" format="{0:c}" filter="numeric">
            </kendo-grid-column>
            <kendo-grid-column field="CategoryID" title="Category" width="180">
                <ng-template kendoGridFilterMenuTemplate
                    let-column="column"
                    let-filter="filter"
                    let-filterService="filterService"
                    >
                    <kendo-multiselect
                        style="width:220px"
                        [data]="categories"
                        textField="CategoryName"
                        valueField="CategoryID"
                        [valuePrimitive]="true"
                        [value]="categoryFilters(filter)"
                        (valueChange)="categoryChange($event, filterService)"
                        >
                    </kendo-multiselect>
                </ng-template>
                <ng-template kendoGridCellTemplate let-dataItem>
                    {{dataItem.Category?.CategoryName}}
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="Discontinued" width="160" filter="boolean">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
`
})
export class AppComponent {
    public filter: CompositeFilterDescriptor;
    public gridData: any[] = filterBy(sampleProducts, this.filter);
    public categories: any[] = distinctCategories(sampleProducts);

    public filterChange(filter: CompositeFilterDescriptor): void {
        this.filter = filter;
        this.gridData = filterBy(sampleProducts, filter);
    }

    public categoryChange(values: any[], filterService: FilterService): void {
        filterService.filter({
            filters: values.map(value => ({
                field: 'CategoryID',
                operator: 'eq',
                value
            })),
            logic: 'or'
        });
    }

    public categoryFilters(filter: CompositeFilterDescriptor): FilterDescriptor[] {
        return flatten(filter).map(({ value }) => value);
    }
}
