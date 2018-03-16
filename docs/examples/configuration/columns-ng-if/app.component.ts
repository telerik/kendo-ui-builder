import { Component } from '@angular/core';
import { sampleCustomers } from './customers';

@Component({
  selector: 'my-app',
  template: `
      <div class="row example-config">
          <div *ngFor="let column of columns" class="col-xs-12 col-md-3 example-col">
              <input type="checkbox"
                id="{{column}}"
                class="k-checkbox"
                [disabled]="isDisabled(column)"
                [checked]="!isHidden(column)"
                (change)="hideColumn(column)" />
              <label class="k-checkbox-label" for="{{column}}">{{column}}</label>
          </div>
      </div>

        <kendo-grid [data]="gridData">
          <kendo-grid-column field="CompanyName" title="Company Name" *ngIf="!isHidden('CompanyName')">
          </kendo-grid-column>
          <kendo-grid-column field="ContactName" title="Contact Name" *ngIf="!isHidden('ContactName')">
          </kendo-grid-column>
          <kendo-grid-column field="ContactTitle" title="ContactTitle" *ngIf="!isHidden('ContactTitle')">
          </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
  public gridData: any[] = sampleCustomers;

  public columns: string[] = [
    'CompanyName', 'ContactName', 'ContactTitle'
  ];

  public hiddenColumns: string[] = [];

  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }

  public isDisabled(columnName: string): boolean {
    return this.columns.length - this.hiddenColumns.length === 1 && !this.isHidden(columnName);
  }

  public hideColumn(columnName: string): void {
    const hiddenColumns = this.hiddenColumns;

    if (!this.isHidden(columnName)) {
      hiddenColumns.push(columnName);
    } else {
      hiddenColumns.splice(hiddenColumns.indexOf(columnName), 1);
    }
  }
}
