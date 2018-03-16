import { Component } from '@angular/core';
import { process } from '@progress/kendo-data-query';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [kendoGridBinding]="products" [height]="400" [group]="group" [pageable]="true" [pageSize]="10">
            <ng-template kendoGridToolbarTemplate>
                <button type="button" kendoGridExcelCommand ><span class="k-icon k-i-file-excel"></span>Export to Excel</button>
            </ng-template>
            <kendo-grid-column field="ProductID" title="Product ID" [width]="200">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Product Name">
            </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category" [hidden]="true">
            </kendo-grid-column>
        <kendo-grid-excel fileName="Products.xlsx" [fetchData]="allData"></kendo-grid-excel>
      </kendo-grid>
    `
})
export class AppComponent {
    public products: any[] = products;

    public group: any[] = [{
        field: 'Category.CategoryName'
    }];

    constructor() {
        this.allData = this.allData.bind(this);
    }

    public allData(): ExcelExportData {
        const result: ExcelExportData =  {
            data: process(products, { group: this.group, sort: [{ field: 'ProductID', dir: 'asc' }] }).data,
            group: this.group
        };

        return result;
    }
}
