import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
          [kendoGridBinding]="products"
          [height]="410"
          [pageable]="true"
          [pageSize]="10"
          >
            <kendo-grid-column>
              <ng-template kendoGridCellTemplate let-dataItem>
                <div class="product">
                  <img src="http://demos.telerik.com/kendo-ui/content/web/foods/{{dataItem.ProductID}}.jpg"
                      alt="{{dataItem.ProductName}}" />
                  <h3>{{dataItem.ProductName}}</h3>
                  <p>{{dataItem.UnitPrice | currency}}</p>
              </div>
              </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `,
    styles: [`
      >>> tr {
        display: inline-block;
      }

      >>> td {
        display: inline-block;
      }

      >>> .k-grid-header {
        display: none;
      }

      >>> .product {
          float: left;
          position: relative;
          width: 111px;
          height: 170px;
          margin: 0 5px;
          padding: 0;
      }
      >>> .product img {
          width: 110px;
          height: 110px;
      }
      >>> .product h3 {
          margin: 0;
          padding: 3px 5px 0 0;
          max-width: 96px;
          overflow: hidden;
          line-height: 1.1em;
          font-size: .9em;
          font-weight: normal;
          text-transform: uppercase;
          color: #999;
      }
      >>> .product p {
          visibility: hidden;
      }
      >>> .product:hover p {
          visibility: visible;
          position: absolute;
          width: 110px;
          height: 110px;
          top: 0;
          margin: 0;
          padding: 0;
          line-height: 110px;
          vertical-align: middle;
          text-align: center;
          color: #fff;
          background-color: rgba(0,0,0,0.75);
          transition: background .2s linear, color .2s linear;
          -moz-transition: background .2s linear, color .2s linear;
          -webkit-transition: background .2s linear, color .2s linear;
          -o-transition: background .2s linear, color .2s linear;
      }
    `]
})
export class AppComponent {
    private products = products;
}

