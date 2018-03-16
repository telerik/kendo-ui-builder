import {
    Component
} from '@angular/core';
import {
    GridDataResult,
    PageChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
      <kendo-grid
          [data]="gridView"
          [skip]="skip"
          [pageSize]="pageSize"
          [scrollable]="'virtual'"
          [rowHeight]="35"
          [height]="450"
          (pageChange)="pageChange($event)"
        >
        <kendo-grid-column field="id" [width]="80" title="ID"></kendo-grid-column>
        <kendo-grid-column field="firstName" title="First Name" [width]="130"></kendo-grid-column>
        <kendo-grid-column field="lastName" title="Last Name" [width]="130"></kendo-grid-column>
        <kendo-grid-column field="city" title="City" [width]="130"></kendo-grid-column>
        <kendo-grid-column field="title" title="Title" [width]="180"></kendo-grid-column>
      </kendo-grid>
  `
})
export class AppComponent {
    public gridView: GridDataResult;
    public data: any[];
    public pageSize = 100;
    public skip = 0;
    public view = new Array(this.pageSize).fill({}).map(x => ({}));

    constructor() {
        this.data = this.createRandomData(100000);
        this.loadProducts();
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadProducts();
    }

    /* Generating example data */
    public createRandomData(count: number) {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'],
            lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth', 'White'],
            cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston'],
            titles = ['Accountant', 'Vice President, Sales', 'Sales Representative', 'Technical Support', 'Sales Manager', 'Web Designer',
                'Software Developer'];

        return Array(count).fill({}).map((_, idx) => ({
            id: idx + 1,
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            title: titles[Math.floor(Math.random() * titles.length)]
        })
        );
    }

    private loadProducts(): void {
        const currentView = this.data.slice(this.skip, this.skip + this.pageSize);

        const removeCount = this.view.length - currentView.length;

        if (removeCount > 0) {
            this.view.splice(currentView.length - 1, removeCount);
        }

        currentView.forEach((item, index) => {
            if (!this.view[index]) {
            this.view[index] = {};
            }
            Object.assign(this.view[index], item);
        });

        this.gridView = {
            data: this.view,
            total: this.data.length
        };
    }
}
