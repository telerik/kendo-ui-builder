import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { products } from './products';
import { Product } from './model';

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid
          [kendoGridReactiveEditing]="createFormGroup"
          [kendoGridBinding]="products"
          [height]="500"
          [pageSize]="10"
          [pageable]="true"
          [sortable]="true"
          [navigable]="true"
        >
        <ng-template kendoGridToolbarTemplate>
            <button kendoGridAddCommand>Add new</button>
        </ng-template>
        <kendo-grid-column field="ProductName" title="Product Name"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" editor="numeric" title="Price"></kendo-grid-column>
        <kendo-grid-column field="Discontinued" editor="boolean" title="Discontinued"></kendo-grid-column>
        <kendo-grid-column field="UnitsInStock" editor="numeric" title="Units In Stock"></kendo-grid-column>
        <kendo-grid-command-column title="command" width="220">
            <ng-template kendoGridCellTemplate let-isNew="isNew">
                <button kendoGridEditCommand class="k-primary">Edit</button>
                <button kendoGridRemoveCommand>Remove</button>
                <button kendoGridSaveCommand [disabled]="formGroup?.invalid">{{ isNew ? 'Add' : 'Update' }}</button>
                <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>
            </ng-template>
        </kendo-grid-command-column>
      </kendo-grid>
  `
})
export class AppComponent {
    public products: any[] = products;
    public formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.createFormGroup = this.createFormGroup.bind(this);
    }

    public createFormGroup(args: any): Product {
        const item = args.isNew ? new Product() : args.dataItem;

        this.formGroup = this.formBuilder.group({
            'ProductID': item.ProductID,
            'ProductName': [item.ProductName, Validators.required],
            'UnitPrice': item.UnitPrice,
            'UnitsInStock': [item.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])],
            'Discontinued': item.Discontinued
        });

        return this.formGroup;
    }
}
