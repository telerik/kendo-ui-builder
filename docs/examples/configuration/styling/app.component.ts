import { Component } from '@angular/core';
import { sampleCustomers } from './customers';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData">
            <kendo-grid-column
              field="ContactName"
              title="Contact Name"
              [width]="150"
              [headerStyle]="{'background-color': '#666','color': '#fff','line-height': '1em'}"
              [style]="{'background-color': '#888','color': '#fff'}"
              [footerStyle]="{'background-color': '#888','color': '#fff'}"
            >
              <ng-template kendoGridFooterTemplate>Contacts: 10</ng-template>
            </kendo-grid-column>
            <kendo-grid-column
              field="CompanyName"
              title="Company Name"
              [headerStyle]="{'background-color': '#666','color': '#fff','line-height': '1em'}"
            >
            </kendo-grid-column>
            <kendo-grid-column
              field="City"
              title="City"
              [headerStyle]="{'background-color': '#666','color': '#fff','line-height': '1em'}"
            >
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
  public gridData: any[] = sampleCustomers;
}
