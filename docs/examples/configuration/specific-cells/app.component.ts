import { Component, ViewEncapsulation } from '@angular/core';
import { RowClassArgs } from '@progress/kendo-angular-grid';

const products = [{
    'ProductID': 1,
    'ProductName': 'Chai',
    'UnitPrice': 18.0000,
    'Discontinued': true,
    'code': 'C1'
  }, {
    'ProductID': 2,
    'ProductName': 'Chang',
    'UnitPrice': 19.0000,
    'Discontinued': false,
    'code': 'C2'
  }
];

@Component({
   selector: 'my-app',
   encapsulation: ViewEncapsulation.None,
   styles: [`
       .gold .codeColumn { background-color: #FFBA80; }
       .green .codeColumn { background-color: #B2F699; }
   `],
   template: `
       <kendo-grid [data]="gridData" [rowClass]="rowCallback">
         <kendo-grid-column field="ProductName" title="Product Name">
         </kendo-grid-column>
         <kendo-grid-column field="UnitPrice" title="Unit Price" width="230">
         </kendo-grid-column>
         <kendo-grid-column field="code" title="Code" width="230" [class]="{'codeColumn': true}">
         </kendo-grid-column>
       </kendo-grid>
   `
})
export class AppComponent {
  public gridData: any[] = products;

  // Use an arrow function to capture the 'this' execution context of the class.
  public rowCallback = (context: RowClassArgs) => {
    switch (context.dataItem.code) {
      case 'C1':
        return {gold : true};
      case 'C2':
        return {green : true};
      default:
        return {};
     }
   }
}
