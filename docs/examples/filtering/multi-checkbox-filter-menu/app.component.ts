import { Component, ViewChild } from '@angular/core';
import { filterBy, FilterDescriptor, CompositeFilterDescriptor, distinct } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

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
          <ng-template kendoGridFilterMenuTemplate
                let-column="column"
                let-filter="filter"
                let-filterService="filterService"
                >
                <multicheck-filter
                  [isPrimitive]="true"
                  [field]="column.field"
                  [filterService]="filterService"
                  [currentFilter]="filter"
                  [data]="distinctPrimitive(column.field)"></multicheck-filter>
            </ng-template>
        </kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" width="130" format="{0:c}" filter="numeric">
          <ng-template kendoGridFilterMenuTemplate
                let-column="column"
                let-filter="filter"
                let-filterService="filterService"
                >
                <multicheck-filter
                  [isPrimitive]="true"
                  [field]="column.field"
                  [filterService]="filterService"
                  [currentFilter]="filter"
                  [data]="distinctPrimitive(column.field)"></multicheck-filter>
            </ng-template>
        </kendo-grid-column>
        <kendo-grid-column field="CategoryID" title="Category" width="180">
            <ng-template kendoGridFilterMenuTemplate
                let-column="column"
                let-filter="filter"
                let-filterService="filterService"
                >
                <multicheck-filter
                  [isPrimitive]="false"
                  [field]="column.field"
                  [currentFilter]="filter"
                  [filterService]="filterService"
                  textField="CategoryName"
                  valueField="CategoryID"
                  [data]="categories"></multicheck-filter>
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
    public categories: any[] = distinct(sampleProducts, 'CategoryID').map(item => item.Category);

    public filterChange(filter: CompositeFilterDescriptor): void {
        this.filter = filter;
        this.gridData = filterBy(sampleProducts, filter);
    }

    public distinctPrimitive(fieldName: string): any {
      return distinct(sampleProducts, fieldName).map(item => item[fieldName]);
    }
}
