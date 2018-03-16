import { Component, ViewEncapsulation } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [kendoGridBinding]="products" [pageable]="true" [pageSize]="10" [height]="430">
            <ng-template kendoGridToolbarTemplate>
                <button kendoGridPDFCommand><span class='k-icon k-i-file-pdf'></span>Export to PDF</button>
            </ng-template>
            <kendo-grid-column field="ProductID" width="100">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName">
            </kendo-grid-column>
            <kendo-grid-pdf fileName="Products.pdf" paperSize="A4" [allPages]="true" [repeatHeaders]="true">
                <kendo-grid-pdf-margin top="2cm" left="1cm" right="1cm" bottom="2cm"></kendo-grid-pdf-margin>
                <ng-template kendoGridPDFTemplate let-pageNum="pageNum" let-totalPages="totalPages">
                 <div class="page-template">
                    <div class="header">
                      <div style="float: right">Page {{ pageNum }} of {{ totalPages }}</div>
                      Multi-page grid with automatic page breaking
                    </div>
                    <div class="footer">
                      Page {{ pageNum }} of {{ totalPages }}
                    </div>
                  </div>
                </ng-template>
            </kendo-grid-pdf>
        </kendo-grid>
    `,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['pdf-styles.css'],
    styles: [`
        .page-template {
          font-family: "DejaVu Sans", "Arial", sans-serif;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .page-template .header {
          position: absolute;
          top: 30px;
          left: 30px;
          right: 30px;
          border-bottom: 1px solid #888;
          color: #888;
        }

        .page-template .footer {
          position: absolute;
          bottom: 30px;
          left: 30px;
          right: 30px;
          border-top: 1px solid #888;
          text-align: center;
          color: #888;
    }`]
})
export class AppComponent {
    public products: any[] = products;
}
