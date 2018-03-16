import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

export abstract class NorthwindService extends BehaviorSubject<GridDataResult> {
    private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';
    public isLoading = true;
    constructor(private http: Http, private tableName: string) {
        super(null);
    }
    public query(state: any): void {
        this.fetch(this.tableName, state)
            .subscribe(x => super.next(x));
    }
    private fetch(tableName: string, state: any): Observable<GridDataResult> {
        const queryStr = `${toODataString(state)}&$count=true`;
        this.isLoading = true;
        return this.http
            .get(`${this.BASE_URL}${tableName}?${queryStr}`)
            .pipe(
                map(response => response.json()),
                tap(() => this.isLoading = false),
                map(response => (<GridDataResult>{
                    data: response.value,
                    total: parseInt(response["@odata.count"], 10)
                })));
    }
}

@Injectable()
export class ProductsService extends NorthwindService {
    constructor(http: Http) { super(http, "Products"); }

    public queryForCategory({ CategoryID }: { CategoryID: number }, state?: any): void {
        this.query(Object.assign({}, state, {
            filter: {
                filters: [{
                    field: "CategoryID", operator: "eq", value: CategoryID
                }],
                logic: "and"
            }
        }));
    }

    public queryForProductName(ProductName: string, state?: any): void {
        this.query(Object.assign({}, state, {
            filter: {
                filters: [{
                    field: "ProductName", operator: "contains", value: ProductName
                }],
                logic: "and"
            }
        }));
    }

}

@Injectable()
export class CategoriesService extends NorthwindService {
    constructor(http: Http) { super(http, "Categories"); }
}
