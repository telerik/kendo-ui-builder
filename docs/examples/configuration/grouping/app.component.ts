import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { GroupDescriptor, DataResult, process } from '@progress/kendo-data-query';

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid
          [groupable]="true"
          [data]="gridView"
          [group]="groups"
          (groupChange)="groupChange($event)"
        >
        <kendo-grid-column field="ProductID" title="ID" [width]="80"></kendo-grid-column>
        <kendo-grid-column field="ProductName" title="Name" [width]="300"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" [width]="120"></kendo-grid-column>
        <kendo-grid-column field="Category.CategoryName" title="Category">
            <ng-template kendoGridGroupHeaderTemplate let-value="value">
                {{value}}
            </ng-template>
        </kendo-grid-column>
      </kendo-grid>
  `
})
export class AppComponent implements OnInit {
    public groups: GroupDescriptor[] = [{ field: 'Category.CategoryName' }];

    public gridView: DataResult;

    public ngOnInit(): void {
        this.loadProducts();
    }

    public groupChange(groups: GroupDescriptor[]): void {
        this.groups = groups;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = process(products, { group: this.groups });
    }
}
