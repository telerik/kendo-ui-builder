import {
    AfterViewInit,
    Component,
    Renderer2,
    ViewChild
} from '@angular/core';

import {
    GridComponent,
    GridDataResult,
    PageChangeEvent
} from '@progress/kendo-angular-grid';

import { debounceTime } from 'rxjs/operators/add/debounceTime';

@Component({
    selector: 'my-app',
    template: `
      <kendo-grid #grid
          [data]="gridView"
          [skip]="skip"
          [pageSize]="pageSize"
          [scrollable]="'virtual'"
          [rowHeight]="rowHeight"
          [height]="350"
        >
        <kendo-grid-column media="xs" title="Items">
            <ng-template kendoGridCellTemplate let-dataItem>
              <div class="mobile-row">
                <!-- template for mobile -->
                <h4 [class.discontinued]="dataItem.Discontinued">
                    {{ dataItem.firstName }} {{ dataItem.lastName }}
                </h4>
                <dl>
                    <dt>City</dt>
                    <dd>{{ dataItem.city }}</dd>

                    <dt>ID</dt>
                    <dd>{{ dataItem.id }}</dd>
                </dl>
              </div>
            </ng-template>
        </kendo-grid-column>

        <kendo-grid-column media="sm" field="id" [width]="80" title="ID"></kendo-grid-column>
        <kendo-grid-column media="sm" field="firstName" title="First Name" [width]="130"></kendo-grid-column>
        <kendo-grid-column media="sm" field="lastName" title="Last Name" [width]="130"></kendo-grid-column>
        <kendo-grid-column media="sm" field="city" title="City" [width]="130"></kendo-grid-column>
        <kendo-grid-column media="sm" field="title" title="Title" [width]="180"></kendo-grid-column>
      </kendo-grid>
  `,
  styles: [
    `
        dl { margin: 0; }
        .mobile-row { height: 140px; overflow: hidden; }

    `
  ]
})
export class AppComponent implements AfterViewInit {
    private gridView: GridDataResult;
    private data: any[];
    private pageSize = 100;
    private skip = 0;

    private rowHeight = 36;

    @ViewChild('grid')
    private grid: GridComponent;

    constructor(private renderer: Renderer2) {
        this.data = this.createRandomData(100000);
        this.loadProducts();

        this.updateRowHeight();
        renderer.listen('window', 'resize', () => this.updateRowHeight());
    }

    ngAfterViewInit(): void {
        this.grid.pageChange
            .debounceTime(50)
            .subscribe((e) => this.pageChange(e));
    }

    public updateRowHeight(): void {
      // change row height for given media
      // XS responsive brakpoint as defined in http://www.telerik.com/kendo-angular-ui/components/grid/responsive/
      this.rowHeight = window.matchMedia("(max-width: 576px)").matches ? 156 : 36;
      console.log('rowHeight is now ', this.rowHeight);
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: this.data.slice(this.skip, this.skip + this.pageSize),
            total: this.data.length
        };
    }

    /* Generating example data */
    private createRandomData(count: number) {
        const firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne", "Nige"],
            lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth", "White"],
            cities = ["Seattle", "Tacoma", "Kirkland", "Redmond", "London", "Philadelphia", "New York", "Seattle", "London", "Boston"],
            titles = ["Accountant", "Vice President, Sales", "Sales Representative", "Technical Support", "Sales Manager", "Web Designer",
                "Software Developer"];

        return Array(count).fill({}).map((_, idx) => ({
            id: idx + 1,
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            title: titles[Math.floor(Math.random() * titles.length)]
        })
        );
    }
}
