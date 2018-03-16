import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <h4>Resize the output frame to see responsive behavior</h4>

        <kendo-grid [data]="gridData" [height]="400">
            <kendo-grid-column media="(max-width: 450px)" title="Items">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <!-- template for mobile -->
                    <h4 [class.discontinued]="dataItem.Discontinued">
                        {{ dataItem.Name }}
                    </h4>
                    <dl>
                        <dt>Category</dt>
                        <dd>{{ dataItem.Category.CategoryName }}</dd>

                        <dt>Price</dt>
                        <dd>{{ dataItem.UnitPrice }}</dd>

                        <dt>In stock</dt>
                        <dd>{{ dataItem.UnitsInStock }}</dd>
                    </dl>
                </ng-template>
            </kendo-grid-column>

            <!-- columns for mid-size devices -->
            <kendo-grid-column
                media="(min-width: 450px)"
                field="ProductID" title="ID" width="40">
            </kendo-grid-column>
            <kendo-grid-column
                media="(min-width: 450px)"
                field="ProductName" title="Name">
            </kendo-grid-column>
            <kendo-grid-column
                media="(min-width: 450px)"
                field="Category.CategoryName" title="Category">
            </kendo-grid-column>

            <!-- additional columns on large devices -->
            <kendo-grid-column
                media="(min-width: 680px)"
                field="UnitPrice" title="Price" width="80">
            </kendo-grid-column>
            <kendo-grid-column
                media="(min-width: 680px)"
                field="UnitsInStock" title="In stock" width="80">
            </kendo-grid-column>
            <kendo-grid-column
                media="(min-width: 680px)"
                title="Discontinued" width="120">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.Discontinued" disabled />
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = products;
}
