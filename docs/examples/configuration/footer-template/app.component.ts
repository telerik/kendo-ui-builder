import { Component } from '@angular/core';
import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData">
            <kendo-grid-column field="ProductName" title="Name" [width]="300">
                <ng-template kendoGridFooterTemplate let-column let-columnIndex="columnIndex">
                  {{column.field}}({{columnIndex}})
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Unit Price" [width]="100">
                <ng-template kendoGridFooterTemplate let-column let-columnIndex="columnIndex">
                  {{column.field}}({{columnIndex}})
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units In Stock" [width]="100">
                <ng-template kendoGridFooterTemplate let-column let-columnIndex="columnIndex">
                  {{column.field}}({{columnIndex}})
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = sampleProducts;
}
