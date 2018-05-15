---
title: Custom Code
page_title: Custom Code - Extension Points - Kendo UI Builder
description: "Learn how to use the exposed events to implement custom functions and customize the event-handling scenarios in web applications generated with the Kendo UI Builder."
slug: customcode_kuib
position: 2
---

# Custom Code

The Builder provides options for customizing some of the exposed events after the generation of the web project.

For example, you can use the exposed component events to implement custom functions and customize the event-handling scenarios.

{% meta height:700 %}
```ts-preview
/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { SelectionEvent, ColumnComponent } from '@progress/kendo-angular-grid';
import { GridDemoBaseComponent } from './grid-demo.base.component';

export class GridDemoComponent extends GridDemoBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);

        this.$config.title = 'Grid Changed Title';
    }

    // Fired when component is initialized and input properties are set
    public onInit(): void {

    }
    // Fired when component's views and child views are initialized
    public onShow(): void {
    }

    // Fired just before Angular destroys the component. Unsubscribe Observables and detach event handlers to avoid memory leaks
    public onHide(): void {
    }

    public onRowSelect(e: SelectionEvent): void {
        console.log(`Selected CustomerID: ${e.selectedRows[0].dataItem.CustomerID}`);
    }

    public togglePaging(enablePaging: boolean): void {
        this.grid.kendoGrid.pageable = enablePaging;
        if (!enablePaging) {
            this.$dataServicesState.Customers.take = undefined;
        } else {
            this.$dataServicesState.Customers.take = 5;
        }

        this.read('Customers');
    }

    public toggleColumnsVisibility(hiddenColumns: Array<string>) {
        this.grid.kendoGrid.columns.forEach(c => {
            c.hidden = hiddenColumns.indexOf((<ColumnComponent>c).field) > -1;
        });
    }
}
```
{% endmeta %}


## Suggested Links

* [Overview of Extension Points]({% slug extensionpoints_kuib %})
