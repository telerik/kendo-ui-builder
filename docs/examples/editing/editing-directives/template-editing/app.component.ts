import { Component } from '@angular/core';

import { products } from './products';
import { Product } from './model';

@Component({
  selector: 'my-app',
  template: `
    <form novalidate #myForm="ngForm">
          <kendo-grid
              [kendoGridTemplateEditing]="createNewProduct"
              [kendoGridBinding]="products"
              [height]="500"
              [pageSize]="10"
              [pageable]="true"
              [sortable]="true"
              [navigable]="true"
            >
            <ng-template kendoGridToolbarTemplate>
                <button kendoGridAddCommand type="button">Add new</button>
            </ng-template>
            <kendo-grid-column field="ProductName" title="Product Name">
                <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                    <input [(ngModel)]="dataItem.ProductName" kendoGridFocusable name="ProductName" class="k-textbox" required/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" editor="numeric" title="Price">
                <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                    <input [(ngModel)]="dataItem.UnitPrice" kendoGridFocusable name="UnitPrice" class="k-textbox" type="number"/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="Discontinued" editor="boolean" title="Discontinued">
                <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                    <input [(ngModel)]="dataItem.Discontinued" kendoGridFocusable name="Discontinued" type="checkbox"/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" editor="numeric" title="Units In Stock">
                <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                    <input
                        [(ngModel)]="dataItem.UnitsInStock"
                        kendoGridFocusable
                        name="UnitsInStock"
                        required
                        min="0"
                        max="999"
                        class="k-textbox"
                        type="number"/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-command-column title="command" width="220">
                <ng-template kendoGridCellTemplate let-isNew="isNew">
                    <button kendoGridEditCommand type="button" class="k-primary">Edit</button>
                    <button kendoGridRemoveCommand type="button">Remove</button>
                    <button kendoGridSaveCommand type="button" [disabled]="myForm.invalid">{{ isNew ? 'Add' : 'Update' }}</button>
                    <button kendoGridCancelCommand type="button">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>
                </ng-template>
            </kendo-grid-command-column>
          </kendo-grid>
      </form>
  `
})
export class AppComponent {
    public products: any[] = products;

    createNewProduct(): Product {
        return new Product();
    }
}
