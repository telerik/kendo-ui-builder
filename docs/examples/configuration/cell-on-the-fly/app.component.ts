import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

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
      .k-grid .no-padding {
        padding: 0;
      }
       .whole-cell {
         display: block;
         padding: 8px 12px; /* depends on theme */
       }
   `],
   template: `
       <kendo-grid [data]="gridData">
         <kendo-grid-column field="ProductName" title="Product Name">
         </kendo-grid-column>
         <kendo-grid-column field="UnitPrice" title="Unit Price" width="230">
         </kendo-grid-column>
         <kendo-grid-column field="code" title="Code" width="230" class="no-padding">
            <ng-template kendoGridCellTemplate let-dataItem>
              <span class="whole-cell" [style.backgroundColor]="colorCode(dataItem.code)">
                {{ dataItem.code }}
              </span>
            </ng-template>
         </kendo-grid-column>
       </kendo-grid>
   `
})
export class AppComponent {
   public gridData: any[] = products;

   constructor(private sanitizer: DomSanitizer) {}

   public colorCode(code: string): SafeStyle {
     let result;

     switch (code) {
      case 'C1' :
        result = '#FFBA80';
        break;
      case 'C2' :
        result = '#B2F699';
        break;
      default:
        result = 'transparent';
        break;
     }

     return this.sanitizer.bypassSecurityTrustStyle(result);
   }
}
