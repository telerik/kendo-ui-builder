import { Component } from '@angular/core';
import { products } from './products';
import { RowArgs, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
            [data]="gridView"
            [pageSize]="pageSize"
            [skip]="skip"
            [pageable]="true"
            [height]="500"
            (pageChange)="pageChange($event)"
            [kendoGridSelectBy]="mySelectionKey"
            [selectedKeys]="mySelection"
            >
            <kendo-grid-column field="ProductName" title="Product Name" [width]="300"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units In Stock"></kendo-grid-column>
            <kendo-grid-column field="UnitsOnOrder" title="Units On Order"></kendo-grid-column>
            <kendo-grid-column field="ReorderLevel" title="Reorder Level"></kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridView: GridDataResult;
    public items: any[] = products;
    public pageSize = 10;
    public skip = 0;

    public mySelection: string[] = [];
    public mySelectionKey(context: RowArgs): string {
        return context.dataItem.ProductName + ' ' + context.index;
    }

    constructor() {
        this.loadItems();
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }
}
