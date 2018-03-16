import { Component } from '@angular/core';
import { products } from './products';
import { RowArgs } from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
            [data]="gridData"
            [height]="500"
            [selectable]="true"
            [rowSelected]="isRowSelected"
            >
            <kendo-grid-column field="ProductName" title="Product Name" [width]="300"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units In Stock"></kendo-grid-column>
            <kendo-grid-column field="UnitsOnOrder" title="Units On Order"></kendo-grid-column>
            <kendo-grid-column field="ReorderLevel" title="Reorder Level"></kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = products;
    public mySelection: any[] = [1, 3, 5];

    // Use an arrow function to capture the 'this' execution context of the class.
    public isRowSelected = (e: RowArgs) => this.mySelection.indexOf(e.dataItem.ProductID) >= 0;
}
