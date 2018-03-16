import { Component } from '@angular/core';
import { products } from './products';
import { SelectableSettings } from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
        <div style="margin: 10px">
            <div class="card">
                <div class="card-block k-form">
                    <fieldset>
                    <legend>Selection Settings</legend>
                    <div class="k-form-field">
                        <span>Mode</span>
                        <input type="radio" name="mode" id="single" value="single" class="k-radio"
                            [(ngModel)]="mode" (change)="setSelectableSettings()">
                        <label class="k-radio-label" for="single">Single</label>
                        <input type="radio" name="mode" id="multiple" value="multiple" class="k-radio"
                            [(ngModel)]="mode" (change)="setSelectableSettings()">
                        <label class="k-radio-label" for="multiple">Multiple</label>
                    </div>

                    <label class="k-form-field">
                        <input
                            type="checkbox"
                            id="chkboxonly"
                            class="k-checkbox"
                            [(ngModel)]="checkboxOnly"
                            (change)="setSelectableSettings()">
                        <label class="k-checkbox-label" for="chkboxonly">Use checkbox only selection</label>
                    </label>
                    </fieldset>
                </div>
            </div>
        </div>

        <kendo-grid [data]="gridData" [selectable]="selectableSettings" [height]="500">
            <kendo-grid-checkbox-column></kendo-grid-checkbox-column>
            <kendo-grid-column field="ProductName" title="Product Name" [width]="300"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units In Stock"></kendo-grid-column>
            <kendo-grid-column field="UnitsOnOrder" title="Units On Order"></kendo-grid-column>
            <kendo-grid-column field="ReorderLevel" title="Reorder Level"></kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = products;

    public checkboxOnly = false;
    public mode = 'multiple';
    public selectableSettings: SelectableSettings;

    constructor() {
        this.setSelectableSettings();
    }

    public setSelectableSettings(): void {
        this.selectableSettings = {
            checkboxOnly: this.checkboxOnly,
            mode: this.mode
        };
    }
}
