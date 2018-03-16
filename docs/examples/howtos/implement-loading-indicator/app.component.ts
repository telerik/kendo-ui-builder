import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CategoriesService } from './northwind.service';
import { State } from '@progress/kendo-data-query';
import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
      <div class="grid-wrapper">
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
        <kendo-grid-column field="CategoryID" width="100"></kendo-grid-column>
        <kendo-grid-column field="CategoryName" width="200"></kendo-grid-column>
        <kendo-grid-column field="Description" [sortable]="false">
        </kendo-grid-column>
      </kendo-grid>
      <div *ngIf="service.isLoading" class="k-i-loading"></div>
      </div>
    `,
    styles: [`
    .grid-wrapper {
      position: relative;
    }
      .k-i-loading {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 64px;
        background-color: rgba(255,255,255,.3);
        color: #ff6757;
      }
    `]
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
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(state);
    }
}
