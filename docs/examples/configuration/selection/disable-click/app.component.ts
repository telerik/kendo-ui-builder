import { Component } from '@angular/core';

import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="data" [selectable]="true" >
            <kendo-grid-column field="ProductName">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <div class="k-grid-ignore-click" style="width: 50%;border: 1px solid black;">
                        Ignored Element
                    </div>
                    {{ dataItem.ProductName }}
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public data: any[] = sampleProducts;
}
