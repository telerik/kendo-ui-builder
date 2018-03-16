import { Component } from '@angular/core';
import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData">
            <kendo-grid-column field="ProductName">
                <ng-template kendoGridHeaderTemplate let-column let-columnIndex="columnIndex">
                  {{column.field}}({{columnIndex}})
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice">
                <ng-template kendoGridHeaderTemplate let-column let-columnIndex="columnIndex">
                  {{column.field}}({{columnIndex}})
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock">
                <ng-template kendoGridHeaderTemplate let-column let-columnIndex="columnIndex">
                  {{column.field}}({{columnIndex}})
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = sampleProducts;
}
