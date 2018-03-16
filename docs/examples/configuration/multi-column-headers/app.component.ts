import { Component } from '@angular/core';
import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData" [height]="400" [scrollable]="'scrollable'">
            <kendo-grid-column field="ProductName" title="Name" [width]="300" [locked]="true">
                <ng-template kendoGridFooterTemplate let-column let-columnIndex="columnIndex">
                {{column.field}}({{columnIndex}})
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column-group title="Availability" [locked]="false" [width]="600">
                <kendo-grid-column field="UnitsInStock" title="Units In Stock" [width]="300" [locked]="false">
                    <ng-template kendoGridFooterTemplate let-column let-columnIndex="columnIndex">
                    {{column.field}}({{columnIndex}})
                    </ng-template>
                </kendo-grid-column>
                <kendo-grid-column field="UnitPrice" title="Unit Price" [width]="300" [locked]="false">
                    <ng-template kendoGridFooterTemplate let-column let-columnIndex="columnIndex">
                    {{column.field}}({{columnIndex}})
                    </ng-template>
                </kendo-grid-column>
            </kendo-grid-column-group>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = sampleProducts;
}
