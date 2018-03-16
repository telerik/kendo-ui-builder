import { Component } from '@angular/core';
import { products } from './products';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid
          [kendoGridBinding]="data"
          [pageSize]="pageSize"
          [skip]="skip"
          [pageable]="true"
          [height]="200"
        >
         <kendo-grid-column field="ProductID" title="ID" width="40">
         </kendo-grid-column>
         <kendo-grid-column field="ProductName" title="Name" width="250">
         </kendo-grid-column>
         <kendo-grid-column field="UnitPrice" title="Price" width="80" format="{0:c}">
         </kendo-grid-column>

         <ng-template kendoPagerTemplate let-totalPages="totalPages" let-currentPage="currentPage">
            <kendo-pager-prev-buttons></kendo-pager-prev-buttons>
            <kendo-slider
                [showButtons]="false"
                [tickPlacement]="'none'"
                [max]="totalPages"
                [min]="1"
                (valueChange)="sliderChange($event)"
                [value]="currentPage">
            </kendo-slider>
            <kendo-pager-info></kendo-pager-info>
            <kendo-pager-next-buttons></kendo-pager-next-buttons>
            <kendo-pager-page-sizes [pageSizes]="[5, 10, 40]"></kendo-pager-page-sizes>
         </ng-template>
      </kendo-grid>
  `
})
export class AppComponent {
    public data: any[] = products;
    public pageSize = 10;
    public skip = 0;

    public sliderChange(pageIndex: number): void {
        this.skip = (pageIndex - 1) * this.pageSize;
    }
}
