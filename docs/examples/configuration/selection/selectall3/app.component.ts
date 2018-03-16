import { Component } from '@angular/core';
import { products } from './products';
import { GridDataResult, PageChangeEvent, SelectAllCheckboxState } from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
            [data]="gridView"
            [pageSize]="pageSize"
            [skip]="skip"
            [pageable]="true"
            (pageChange)="pageChange($event)"
            [height]="500"
            [selectable]="{enabled: true, checkboxOnly: true }"
            [kendoGridSelectBy]="'ProductID'"
            [selectedKeys]="mySelection"
            (selectedKeysChange)="onSelectedKeysChange($event)"
            >
            <kendo-grid-checkbox-column>
                <ng-template kendoGridHeaderTemplate>
                    <input class="k-checkbox" id="selectAllCheckboxId" kendoGridSelectAllCheckbox
                        [state]="selectAllState"
                        (selectAllChange)="onSelectAllChange($event)">
                    <label class="k-checkbox-label" for="selectAllCheckboxId"></label>
                </ng-template>
            </kendo-grid-checkbox-column>
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
    public mySelection: number[] = [];
    public selectAllState: SelectAllCheckboxState = 'unchecked';
    public pageSize = 10;
    public skip = 0;

    constructor() {
        this.loadItems();
    }

    public onSelectedKeysChange(e) {
        const len = this.mySelection.length;

        if (len === 0) {
            this.selectAllState = 'unchecked';
        } else if (len > 0 && len < this.items.length) {
            this.selectAllState = 'indeterminate';
        } else {
            this.selectAllState = 'checked';
        }
    }

    public onSelectAllChange(checkedState: SelectAllCheckboxState) {
        if (checkedState === 'checked') {
            this.mySelection = this.items.map((item) => item.ProductID);
            this.selectAllState = 'checked';
        } else {
            this.mySelection = [];
            this.selectAllState = 'unchecked';
        }
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
