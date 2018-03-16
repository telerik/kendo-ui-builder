import { Component } from '@angular/core';
import { sampleCustomers } from './customers';

@Component({
    selector: 'my-app',
    template: `
        <div class="example-config">
          <button (click)="restoreColumns()" class="k-button">Restore hidden columns</button>
        </div>

        <kendo-grid [data]="gridData" style="height:400px">
          <ng-template ngFor [ngForOf]="columns" let-column>
            <kendo-grid-column
              field="{{column}}"
              [hidden]="hiddenColumns.indexOf(column) > -1"
            >
              <ng-template kendoGridHeaderTemplate let-dataItem>
                  {{dataItem.field}}
                  <button
                    (click)="hideColumn(dataItem.field)"
                    class="k-button k-primary"
                    style="float: right;"
                  >
                    Hide
                  </button>
              </ng-template>
            </kendo-grid-column>
          </ng-template>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = sampleCustomers;

    public columns: string[] = [
      'CompanyName', 'ContactName', 'ContactTitle'
    ];

    public hiddenColumns: string[] = [];

    public restoreColumns(): void {
        this.hiddenColumns = [];
    }

    public hideColumn(field: string): void {
        this.hiddenColumns.push(field);
    }
}
