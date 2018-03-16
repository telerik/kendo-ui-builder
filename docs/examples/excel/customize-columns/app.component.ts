import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [kendoGridBinding]="products" [height]="400">
            <ng-template kendoGridToolbarTemplate>
                <button type="button" kendoGridExcelCommand ><span class="k-icon k-i-file-excel"></span>Export to Excel</button>
            </ng-template>
            <kendo-grid-column field="ProductID" title="Product ID">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Product Name">
            </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category">
            </kendo-grid-column>
            <kendo-grid-excel fileName="Products.xlsx">
                <kendo-excelexport-column field="ProductName" title="Product Name">
                </kendo-excelexport-column>
                <kendo-excelexport-column field="Category.CategoryName" title="Category">
                </kendo-excelexport-column>
            </kendo-grid-excel>
      </kendo-grid>
    `
})
export class AppComponent {
    public products: any[] = products;
}
