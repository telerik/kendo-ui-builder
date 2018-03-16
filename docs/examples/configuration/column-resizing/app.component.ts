import { Component } from '@angular/core';
import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
            [kendoGridBinding]="gridData"
            [resizable]="true"
            style="height: 300px">
            <kendo-grid-column-group title="Product Info">
                <kendo-grid-column
                    field="ProductID"
                    [width]="50"
                    [minResizableWidth]="30"
                    title="ID">
                </kendo-grid-column>

                <kendo-grid-column
                    field="ProductName"
                    title="Product Name"
                    [width]="360">
                </kendo-grid-column>
            </kendo-grid-column-group>

            <kendo-grid-column
                field="Category.CategoryName"
                title="Category"
                [width]="180">
            </kendo-grid-column>

            <kendo-grid-column
                field="UnitPrice"
                title="Unit Price"
                [width]="180"
                filter="numeric"
                format="{0:c}">
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = sampleProducts;
}
