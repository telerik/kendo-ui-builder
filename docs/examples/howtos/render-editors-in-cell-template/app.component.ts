import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Product } from './model';
import { EditService } from './edit.service';
import { map } from 'rxjs/operators/map';

@Component({
selector: 'my-app',
template: `
  <kendo-grid
      [data]="view | async"
      [height]="400"
      [pageSize]="gridState.take" [skip]="gridState.skip" [sort]="gridState.sort"
      [pageable]="true" [sortable]="true"
      (dataStateChange)="onStateChange($event)" >
    <kendo-grid-column field="ProductName" title="Product Name" width="250">
      <ng-template kendoGridCellTemplate let-dataItem let-rowIndex="rowIndex">
        <kendo-dropdownlist [data]="names"
          [formControl]="formGroups.get('items').at(rowIndex).get('ProductName')">
          </kendo-dropdownlist>
      </ng-template>
    </kendo-grid-column>
    <kendo-grid-column field="UnitPrice" title="Price" width="200">
      <ng-template kendoGridCellTemplate let-dataItem let-rowIndex="rowIndex">
        <kendo-numerictextbox
          [formControl]="formGroups.get('items').at(rowIndex).get('UnitPrice')">
          </kendo-numerictextbox>
      </ng-template>
    </kendo-grid-column>
    <kendo-grid-column field="Discontinued" editor="boolean" width="80" title="Discontinued">
      <ng-template kendoGridCellTemplate let-dataItem let-rowIndex="rowIndex">
        <input type="checkbox"
          [formControl]="formGroups.get('items').at(rowIndex).get('Discontinued')"
           />
      </ng-template>
    </kendo-grid-column>
    <kendo-grid-column field="UnitsInStock" editor="numeric" width="200" title="Units In Stock">
      <ng-template kendoGridCellTemplate let-dataItem let-rowIndex="rowIndex">
        <input type="number"
          step="0.01"
          [formControl]="formGroups.get('items').at(rowIndex).get('UnitsInStock')"
          class="k-textbox" />
      </ng-template>
    </kendo-grid-column>
  </kendo-grid>
  {{formGroups.value | json}}
`,
styles: [`
.k-textbox {
  width: 100%;
}
`],
viewEncapsulation: ViewEncapsulation.No
})
export class AppComponent implements OnInit {
public view: Observable<GridDataResult>;
public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};

// for demo purposes only - hardcoded first 10 product names for the dropdowns
public names = [
  'Chai',
  'Chang',
  'Aniseed Syrup',
  'Chef Anton\'s Cajun Seasoning',
  'Chef Anton\'s Gumbo Mix',
  'Grandma\'s Boysenberry Spread',
  'Northwoods Cranberry Sauce',
  'Mishi Kobe Niku',
  'Ikura'
];

private data: any[];
private dropDownData: string[] = [];
public formGroups: FormGroup = new FormGroup({ items: new FormArray([])});

private editService: EditService;
private editedRowIndex: number;

constructor(@Inject(EditService) editServiceFactory: any) {
    this.editService = editServiceFactory();
}

public ngOnInit(): void {

    this.view = this.editService.pipe(map(data => process(data, this.gridState)));

    this.view.subscribe(r => {
      r.data.forEach(i => {
          this.dropDownData.push(i.ProductName);
          const formGroup = new FormGroup({
            'ProductID': new FormControl(i.ProductID),
            'ProductName': new FormControl(i.ProductName),
            'UnitPrice': new FormControl(i.UnitPrice),
            'Discontinued': new FormControl(i.Discontinued),
            'UnitsInStock': new FormControl(i.UnitsInStock)
          });


        this.formGroups.get("items").push(formGroup);
        });
    });
    this.editService.read();
}

public onStateChange(state: State) {
    this.gridState = state;

    this.editService.read();
}

}
