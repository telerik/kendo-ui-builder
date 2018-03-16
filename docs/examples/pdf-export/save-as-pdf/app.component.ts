import { Component, ViewEncapsulation } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { products } from './products';

@Component({
  selector: 'my-app',
  template: `
      <p>
        <button (click)="exportToPDF(grid)">Export Grid to PDF...</button>
      </p>

      <kendo-grid #grid="kendoGrid" [kendoGridBinding]="products" [pageable]="true" [pageSize]="10" [height]="490">
        <kendo-grid-column field="ProductID" title="ID" width="40">
        </kendo-grid-column>
        <kendo-grid-column field="ProductName" title="Name" width="250">
        </kendo-grid-column>
        <kendo-grid-column field="Category.CategoryName" title="Category">
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
        <kendo-grid-pdf fileName="Products.pdf" [allPages]="true" paperSize="A4" [repeatHeaders]="true" [landscape]="true">
        </kendo-grid-pdf>
      </kendo-grid>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['pdf-styles.css']
})
export class AppComponent {
  public products: any[] = products;

  public exportToPDF(grid: GridComponent): void {
    grid.saveAsPDF();
  }
}
