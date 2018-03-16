import { Component } from '@angular/core';
import { aggregateBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [kendoGridBinding]="products" [height]="400" (excelExport)="onExcelExport($event)" >
            <ng-template kendoGridToolbarTemplate>
                <button type="button" kendoGridExcelCommand ><span class="k-icon k-i-file-excel"></span>Export to Excel</button>
            </ng-template>
            <kendo-grid-column field="ProductID" [locked]="true" title="Product ID" [width]="200">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Product Name" [width]="350">
            </kendo-grid-column>
            <kendo-grid-column-group title="Availability" [width]="360">
                <kendo-grid-column field="UnitPrice" title="Unit Price" [width]="120">
                </kendo-grid-column>
                <kendo-grid-column field="UnitsOnOrder" title="Units On Order" [width]="120">
                </kendo-grid-column>
                <kendo-grid-column field="UnitsInStock" title="Units In Stock" [width]="120">
                </kendo-grid-column>
            </kendo-grid-column-group>
            <kendo-grid-column field="Discontinued" width="120">
            </kendo-grid-column>
        <kendo-grid-excel fileName="Products.xlsx"></kendo-grid-excel>
      </kendo-grid>
    `
})
export class AppComponent {
    public products: any[] = sampleProducts;

    public onExcelExport(e: any): void {
    const rows = e.workbook.sheets[0].rows;

    // align multi header
    rows[0].cells[2].hAlign = 'center';

    // set alternating row color
    let altIdx = 0;
    rows.forEach((row) => {
        if (row.type === 'data') {
            if (altIdx % 2 !== 0) {
                row.cells.forEach((cell) => {
                    cell.background = '#aabbcc';
                });
            }
            altIdx++;
        }
    });
    }

}
