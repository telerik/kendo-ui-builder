import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoriesService } from './northwind.service';

import { State } from '@progress/kendo-data-query';

import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
       <kendo-grid
          [data]="view | async"
          [pageSize]="state.take"
          [skip]="state.skip"
          [sort]="state.sort"
          [sortable]="true"
          [pageable]="true"
          [scrollable]="'none'"
          (dataStateChange)="dataStateChange($event)"
        >
        <ng-template kendoGridToolbarTemplate>
            <button type="button" kendoGridExcelCommand ><span class="k-icon k-i-file-excel"></span>Export to Excel</button>
        </ng-template>
        <kendo-grid-column field="CategoryID" width="100"></kendo-grid-column>
        <kendo-grid-column field="CategoryName" width="200"></kendo-grid-column>
        <kendo-grid-column field="Description" [sortable]="false">
        </kendo-grid-column>
        <kendo-grid-excel fileName="Categories.xlsx" [fetchData]="allData"></kendo-grid-excel>
      </kendo-grid>
    `,
    providers: [CategoriesService]
})
export class AppComponent {
    public view: Observable<GridDataResult>;
    public state: State = {
        skip: 0,
        take: 5
    };

    constructor(private service: CategoriesService) {
        this.view = service;
        this.service.query(this.state);
        this.allData = this.allData.bind(this);
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(state);
    }

    public allData = (): Observable<any> => {
        return this.service.queryAll(this.state);
    }
}
