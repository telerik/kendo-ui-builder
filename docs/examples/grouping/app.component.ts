import { Component } from '@angular/core';
import { process, GroupDescriptor, State, aggregateBy } from '@progress/kendo-data-query';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
<kendo-grid
        [data]="gridData"
        [pageSize]="state.take"
        [skip]="state.skip"
        [sort]="state.sort"
        [group]="state.group"
        [sortable]="{ mode: 'multiple' }"
        [height]="530"
        [pageable]="true"
        [groupable]="{ showFooter: true }"
        (dataStateChange)="dataStateChange($event)"
    >
    <kendo-grid-column field="ProductID" title="Product ID" width="120">
        <ng-template kendoGridGroupHeaderTemplatе>
        </ng-template>
    </kendo-grid-column>
    <kendo-grid-column field="ProductName" title="Product Name">
    </kendo-grid-column>
    <kendo-grid-column field="UnitPrice" title="Unit Price" width="230">
        <ng-template
            kendoGridGroupFooterTemplate
                let-group="group"
                let-aggregates>Sum: {{aggregates["UnitPrice"].sum}}</ng-template>
        <ng-template
            kendoGridFooterTemplate
                let-column="column">Total {{column.title}}: {{total["UnitPrice"].sum}}</ng-template>
    </kendo-grid-column>
    <kendo-grid-column field="Discontinued" width="120">
        <ng-template kendoGridCellTemplate let-dataItem>
            <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
        </ng-template>
    </kendo-grid-column>
    </kendo-grid>
`
})
export class AppComponent {
    public aggregates: any[] = [{field: 'UnitPrice', aggregate: 'sum'}];

    public state: State = {
        skip: 0,
        take: 5,
        group: [{ field: 'UnitPrice', aggregates: this.aggregates }]
    };

    public data = [{
        'ProductID': 1,
        'ProductName': 'Chai',
        'UnitPrice': 18.0000,
        'Discontinued': true
    }, {
        'ProductID': 2,
        'ProductName': 'Chang',
        'UnitPrice': 19.0000,
        'Discontinued': false
    }, {
        'ProductID': 3,
        'ProductName': 'Aniseed Syrup',
        'UnitPrice': 10.0000,
        'Discontinued': false
    }, {
        'ProductID': 4,
        'ProductName': "Chef Anton\'s Cajun Seasoning",
        'UnitPrice': 22.0000,
        'Discontinued': false
    }, {
        'ProductID': 5,
        'ProductName': "Chef Anton\'s Gumbo Mix",
        'UnitPrice': 21.3500,
        'Discontinued': false
    }, {
        'ProductID': 6,
        'ProductName': "Grandma\'s Boysenberry Spread",
        'UnitPrice': 25.0000,
        'Discontinued': false
    }, {
        'ProductID': 7,
        'ProductName': "Chai",
        'UnitPrice': 22.0000,
        'Discontinued': true
    }];

    public gridData: any = process(this.data, this.state);
    public total: any = aggregateBy(this.data, this.aggregates);

    public dataStateChange(state: DataStateChangeEvent): void {
      if (state && state.group) {
        state.group.map(group => group.aggregates = this.aggregates);
      }

      this.state = state;

      this.gridData = process(this.data, this.state);
    }
}
