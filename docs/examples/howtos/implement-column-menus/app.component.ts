import { Component, Input, OnInit } from '@angular/core';
import { products } from './products';
import { ColumnSettings } from './column-settings';
import { State, DataResult, process } from '@progress/kendo-data-query';

@Component({
    selector: 'my-app',
    template: `
        <column-chooser
            [columns]="columns"
            [sort]="state.sort"
            [groups]="state.group"
            (changes)="loadProducts($event)">
        </column-chooser>
        <kendo-grid
            [data]="view"
            [sort]="state.sort"
            [sortable]="true"
            [group]="state.group"
            [height]="300"
            (dataStateChange)="loadProducts($event)">
            <kendo-grid-column
                *ngFor="let column of columns"
                [field]="column.field"
                [hidden]="column.hidden"
                [title]="column.title">
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent implements OnInit {
    public view: DataResult;

    public state: State = {
        sort: [],
        group: []
    };

    public columns: ColumnSettings[] = [
        {
            field: "ProductName",
            title: "Name"
        },
        {
            field: "Category.CategoryName",
            title: "Category",
        },
        {
            field: "UnitPrice",
            title: "UnitPrice",
        }
    ];

    public ngOnInit(): void {
    this.loadProducts();
    }

    private loadProducts(state: State = this.state) {
        this.state = state;
        this.view = process(products, state);
    }
}
