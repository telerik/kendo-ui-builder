import { Component } from '@angular/core';
import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData">
            <kendo-grid-column field="ProductName">
                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex="rowIndex">
                    Row: {{rowIndex}} /
                    <strong>{{dataItem.ProductName}}</strong>
                    <span
                        class="{{dataItem.Discontinued ? 'discontinued' : 'active'}}">
                            {{dataItem.Discontinued ? "discontinued" : "active"}}
                    </span>
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = sampleProducts;
}
