import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { sampleProducts } from './products';

@Component({
    selector: 'my-app',
    template: `
        <div class="k-grid-ignore-click" style="width: 50%;border: 1px solid black;">
            External Ignored Element
        </div>
        <kendo-grid [data]="data" [kendoGridInCellEditing]="createFormGroup" >
            <kendo-grid-column field="ProductName">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <div class="k-grid-ignore-click" style="width: 50%;border: 1px solid black;">
                        Ignored Element
                    </div>
                    {{ dataItem.ProductName }}
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public data: any[] = sampleProducts;

    constructor(private formBuilder: FormBuilder) {}

    public createFormGroup = ({ dataItem }): FormGroup => {
        return this.formBuilder.group({
            ProductName: dataItem.ProductName
        });
    }
}
