import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { products } from './products';
import { Product } from './model';

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid
          [pageSize]="10"
          [pageable]="true"
          [sortable]="true"
          [height]="500"
          [kendoGridBinding]="products"
          [kendoGridReactiveEditing]="createFormGroup"
          [removeConfirmation]="removeConfirmation"
        >
             <ng-template kendoGridToolbarTemplate>
                <button kendoGridAddCommand>Add new item</button>
            </ng-template>
            <kendo-grid-column field="ProductName" title="Product Name"></kendo-grid-column>
            <kendo-grid-column field="UnitPrice" editor="numeric" title="Price"></kendo-grid-column>
            <kendo-grid-column field="Discontinued" editor="boolean" title="Discontinued"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" editor="numeric" title="Units In Stock"></kendo-grid-column>
            <kendo-grid-command-column title="command" width="220">
                <ng-template kendoGridCellTemplate let-isNew="isNew">
                    <button kendoGridEditCommand class="k-primary">Edit</button>
                    <button kendoGridRemoveCommand>Remove</button>
                    <button kendoGridSaveCommand >Save</button>
                    <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>
                </ng-template>
            </kendo-grid-command-column>
        </kendo-grid>
        <kendo-dialog title="Please confirm" *ngIf="itemToRemove" (close)="confirmRemove(false)">
            <p style="margin: 30px; text-align: center;">Are you sure you want to delete product {{ itemToRemove.ProductName }}?</p>
            <kendo-dialog-actions>
                <button class='k-button' (click)="confirmRemove(false)">No</button>
                <button class='k-button k-primary' (click)="confirmRemove(true)" primary="true">Yes</button>
            </kendo-dialog-actions>
        </kendo-dialog>
  `
})
export class AppComponent {
    public products: any[] = products;
    public removeConfirmationSubject: Subject<boolean> = new Subject<boolean>();

    constructor(private formBuilder: FormBuilder) {
        this.createFormGroup = this.createFormGroup.bind(this);
        this.removeConfirmation = this.removeConfirmation.bind(this);
    }

    public createFormGroup(args: any): any {
        const item = args.isNew ? new Product() : args.dataItem;

        const formGroup = this.formBuilder.group({
            'ProductID': item.ProductID,
            'ProductName': [item.ProductName, Validators.required],
            'UnitPrice': item.UnitPrice,
            'UnitsInStock': [item.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])],
            'Discontinued': item.Discontinued
        });

        return formGroup;
    }

    public confirmRemove(shouldRemove: boolean): void {
        this.removeConfirmationSubject.next(shouldRemove);

        this.itemToRemove = null;
    }

    public removeConfirmation(dataItem): Subject<boolean> {
        this.itemToRemove = dataItem;

        return this.removeConfirmationSubject;
    }
}
