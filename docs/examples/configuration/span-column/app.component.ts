import { Component } from '@angular/core';
import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
            [kendoGridBinding]="gridData"
            [sortable]="true"
            [filterable]="true"
            [groupable]="true"
            style="height: 500px">
            <kendo-grid-span-column>
                <kendo-grid-column
                    field="ProductName"
                    title="Product Name"
                    [width]="360">
                    <!--footer to be shown for the ProductName column-->
                    <ng-template kendoGridFooterTemplate let-column>
                        Total Product Count: {{gridData.length}}
                    </ng-template>
                </kendo-grid-column>
                <kendo-grid-column
                    field="Category.CategoryName"
                    title="Category"
                    [width]="180">
                </kendo-grid-column>
                <!--content which to be spanned over the cells-->
                <ng-template kendoGridCellTemplate let-dataItem>
                    <h4>{{dataItem.ProductName}}</h4>
                    <div *ngIf="dataItem.Category">
                        <h6>{{dataItem.Category?.CategoryName}}</h6>
                        <p>{{dataItem.Category?.Description}}</p>
                    </div>
                </ng-template>
            </kendo-grid-span-column>

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
