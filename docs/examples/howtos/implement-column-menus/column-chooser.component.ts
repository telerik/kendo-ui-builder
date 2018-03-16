import { Component, Input, Output, EventEmitter, ViewEncapsulation, HostBinding } from '@angular/core';
import { ColumnSettings } from './column-settings';
import { SortDescriptor, GroupDescriptor } from '@progress/kendo-data-query';

@Component({
    selector: 'column-chooser',
    encapsulation: ViewEncapsulation.None,
    styles: [
      `.host {
        display: block;
        background-color: #ccc;
        padding: 5px 5px 5px 5px;
        margin: 5px 5px 5px 5px;
      }`,
      `.item {
          padding: 8px 12px;
          border: 1px solid grey;
          background-color: #f6f6f6;
      }`,
      `.groups {
        margin: 5px 5px 5px 5px;
      }`
    ],
    template: `
        <kendo-sortable
          [data]="columns"
          itemClass="item"
          >
          <ng-template let-item="item">
              <span (click)="toggleDirection(item.field)">
                  {{item.title || item.field}}
                  <span class="k-icon"
                      [class.k-i-sarrow-n]="sortByField(item.field)?.dir === 'asc'"
                      [class.k-i-sarrow-s]="sortByField(item.field)?.dir === 'desc'"></span>
              </span>
              <a href="#" (click)="toggle(item)">{{item.hidden ? 'show' : 'hide'}}</a>
          </ng-template>
        </kendo-sortable>
        <kendo-multiselect
            class="groups"
            style="width: 99%"
            [data]="columns"
            [value]="selectedGroups"
            textField="title"
            valueField="field"
            [valuePrimitive]="true"
            placeholder="Group By"
            (valueChange)="groupChange($event)">
        </kendo-multiselect>
    `
})
export class ColumnChooserComponent {
    @Input() public columns: ColumnSettings[] = [];
    @Input() public sort: SortDescriptor[] = [];
    @Input() public groups: GroupDescriptor[] = [];
    @Output() public changes: EventEmiter<State> = new EventEmitter<State>();

    @HostBinding("class.host")
    public get hostClass() {
      return true;
    }

    public get selectedGroups() {
        return this.groups.map(x => x.field);
    }

    public toggle(column: ColumnSettings): boolean {
        column.hidden = !column.hidden;
        return false;
    }

    public toggleDirection(field: string) {
        const index = this.sort.findIndex(x => x.field === field);

        if (index > -1) {
            const descriptor = this.sort[index];
            this.sort = [
                ...this.sort.slice(0, index), {
                    field: field,
                    dir: descriptor.dir === "asc" ? "desc" : descriptor.dir === "desc" ? undefined : "asc"
                },
                ...this.sort.slice(index + 1)
            ];
        } else {
            this.sort = this.sort.concat([{
                field: field,
                dir: "asc"
            }]);
        }

        this.changes.emit({
            sort: this.sort,
            group: this.groups
        });
    }

    public sortByField(field: string): SortDescriptor {
        return this.sort.find(x => x.field === field);
    }

    public groupChange(values: string[]): void {
        this.changes.emit({
            sort: this.sort,
            group: values.map(x => ({
                field: x
            }))
        });
    }

}
