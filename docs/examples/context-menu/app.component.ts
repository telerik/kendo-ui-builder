import { Component, ViewEncapsulation, Renderer2 } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData" [height]="410" #grid>
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
        </kendo-grid>
        <grid-context-menu [for]="grid" [menuItems]="['Move Up', 'Move Down']" (select)="onSelect($event)">
        </grid-context-menu>
    `
})
export class AppComponent {
    public gridData: any[] = products;

    public onSelect({ dataItem, item }): void {
      const index = this.gridData.indexOf(dataItem);
      if (item === 'Move Up') {
        if (index > 0) {
            this.swap(index - 1, index);
        }
      } else if (index < this.gridData.length - 1) {
        this.swap(index, index + 1);
      }
    }

    private swap(index1, index2): void {
        const temp = this.gridData[index1];
        this.gridData[index1] = this.gridData[index2];
        this.gridData[index2] = temp;
    }
}
