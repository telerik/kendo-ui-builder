import { Component } from '@angular/core';
import { products } from './products';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
    selector: 'my-app',
    template: `
      <div class="example-config">
        <label class="k-form-field">
          <input class="k-checkbox" type="checkbox" id="allowUnsort"
              [(ngModel)]="allowUnsort" />
          <label class="k-checkbox-label" for="allowUnsort">
            {{ allowUnsort ? 'Disable': 'Enable' }} unsorting
          </label>
        </label><br/>
        <label class="k-form-field">
          <input class="k-checkbox" type="checkbox" id="multiple"
              [(ngModel)]="multiple"
              />
          <label class="k-checkbox-label" for="multiple">
            {{ multiple ? 'Disable': 'Enable' }} multiple columns sorting
          </label>
        </label>

      </div>
      <kendo-grid
          [data]="gridView"
          [height]="530"
          [sortable]="{
            allowUnsort: allowUnsort,
            mode: multiple ? 'multiple' : 'single'
            }"
          [sort]="sort"
          (sortChange)="sortChange($event)"
        >
        <kendo-grid-column field="ProductID" title="ID" width="80">
        </kendo-grid-column>
        <kendo-grid-column field="ProductName" title="Product Name">
        </kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" width="230">
        </kendo-grid-column>
      </kendo-grid>
  `
})
export class AppComponent {
    public multiple = false;
    public allowUnsort = true;
    public sort: SortDescriptor[] = [{
      field: 'ProductName',
      dir: 'asc'
    }];
    public gridView: GridDataResult;
    public products: any[] = products;

    constructor() {
        this.loadProducts();
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.products, this.sort),
            total: this.products.length
        };
    }
}
