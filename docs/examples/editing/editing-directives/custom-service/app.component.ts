import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { products } from './products';
import { Product } from './model';
import { EditService } from './edit.service';

import { map } from 'rxjs/operators/map';

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid
          [kendoGridInCellEditing]="createFormGroup"
          [editService]="editService"
          [data]="view | async"
          [height]="533"
          [pageSize]="gridState.take" [skip]="gridState.skip" [sort]="gridState.sort"
          [pageable]="true" [sortable]="true"
          (dataStateChange)="onStateChange($event)"
        >
        <ng-template kendoGridToolbarTemplate>
            <button kendoGridAddCommand>Add new</button>
            <button class='k-button' [disabled]="!editService.hasChanges()" (click)="editService.saveChanges();">Save Changes</button>
            <button class='k-button' [disabled]="!editService.hasChanges()" (click)="editService.cancelChanges();">Cancel Changes</button>
        </ng-template>
        <kendo-grid-column field="ProductName" title="Product Name"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" editor="numeric" title="Price"></kendo-grid-column>
        <kendo-grid-column field="Discontinued" editor="boolean" title="Discontinued"></kendo-grid-column>
        <kendo-grid-column field="UnitsInStock" editor="numeric" title="Units In Stock"></kendo-grid-column>
        <kendo-grid-command-column title="command" width="220">
            <ng-template kendoGridCellTemplate let-isNew="isNew">
                <button kendoGridRemoveCommand>Remove</button>
                <button kendoGridSaveCommand [disabled]="formGroup?.invalid">Add</button>
                <button kendoGridCancelCommand>Discard</button>
            </ng-template>
        </kendo-grid-command-column>
      </kendo-grid>
  `
})
export class AppComponent implements OnInit {
    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };

    public changes: any = {};

    constructor(private formBuilder: FormBuilder, public editService: EditService) {
        this.createFormGroup = this.createFormGroup.bind(this);
    }

    public ngOnInit(): void {
        this.view = this.editService.pipe(map(data => process(data, this.gridState)));

        this.editService.read();
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.editService.read();
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
