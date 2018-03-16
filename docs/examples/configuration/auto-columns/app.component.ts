import { Component } from '@angular/core';
import { sampleCustomers } from './customers';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData"></kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = sampleCustomers;
}
