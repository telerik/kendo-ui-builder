import { Component, ViewEncapsulation } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [kendoGridBinding]="products" [pageable]="true" [pageSize]="10" [height]="430">
            <ng-template kendoGridToolbarTemplate>
                <button kendoGridPDFCommand><span class='k-icon k-i-file-pdf'></span>Export to PDF</button>
            </ng-template>
            <kendo-grid-column field="ProductID" title="ID" width="100">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name">
            </kendo-grid-column>
            <kendo-grid-pdf fileName="Products.pdf" [allPages]="true">
                <kendo-grid-pdf-margin top="1cm" left="1cm" right="1cm" bottom="1cm"></kendo-grid-pdf-margin>
            </kendo-grid-pdf>
        </kendo-grid>
    `,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['pdf-styles.css']
})
export class AppComponent {
    public products: any[] = products;
}
