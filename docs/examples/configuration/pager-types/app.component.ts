import { PageChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      <p>
        <label for="type">Type of the pager:
            <select id="type" [(ngModel)]="type">
                <option value="numeric">Numeric</option>
                <option value="input">Input</option>
            </select>
        </label>
      </p>
      <p>
        <label for="buttonCount">Maximum number of buttons:
          <input id="buttonCount" class="k-textbox" type="number" [(ngModel)]="buttonCount"/>
        </label>
      </p>
      <p>
        <label for="info"><input id="info" type="checkbox" [(ngModel)]="info">Show info</label>
      </p>
      <p>
        <input id="pageSizes" type="checkbox" [(ngModel)]="pageSizes">
        <label for="pageSizes">Show page sizes</label><br>
      </p>
      <p>
        <input id="previousNext" type="checkbox" [(ngModel)]="previousNext">
        <label for="previousNext">Show previous / next buttons</label><br>
      </p>
    </div>

    <kendo-grid
        [data]="gridView"
        [pageSize]="pageSize"
        [skip]="skip"
        [pageable]="{
          buttonCount: buttonCount,
          info: info,
          type: type,
          pageSizes: pageSizes,
          previousNext: previousNext
        }"
        [scrollable]="'none'"
        (pageChange)="pageChange($event)"
      >
    </kendo-grid>
  `
})
export class AppComponent {
    public gridView: GridDataResult;

    public buttonCount = 5;
    public info = true;
    public type: 'numeric' | 'input' = 'numeric';
    public pageSizes = true;
    public previousNext = true;

    public pageSize = 5;
    public skip = 0;
    private products: any[] = Array(100).fill({}).map((x, idx) => ({
        'ProductID': idx,
        'ProductName': 'Product' + idx,
        'Discontinued': idx % 2 === 0
    }));

    constructor() {
        this.loadProducts();
    }

    protected pageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.pageSize = take;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: this.products.slice(this.skip, this.skip + this.pageSize),
            total: this.products.length
        };
    }
}
