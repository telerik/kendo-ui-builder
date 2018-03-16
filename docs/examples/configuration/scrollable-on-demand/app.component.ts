import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData" [style.maxHeight.px]="700">
            <kendo-grid-column field="ProductID" title="ID" width="40">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="150">
            </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category" width="200">
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="In stock" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="Discontinued" title="Discontinued" width="120">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
        <br />
        <button class="k-button k-primary" (click)="changeNumberOfItems(10)">Show 10 items (not scrollable)</button>
        <button class="k-button k-primary" (click)="changeNumberOfItems(50)">Show 50 items (scrollable)</button>
    `
})
export class AppComponent {
    public gridData: any[] = products;
    public gridHeight = 700;
    public changeNumberOfItems(numberOfItems: number): void {
      this.gridData = products.slice(0, numberOfItems);
    }
}
