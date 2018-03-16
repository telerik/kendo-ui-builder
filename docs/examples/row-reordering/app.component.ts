import { State, process } from '@progress/kendo-data-query';
import { Component, Renderer2, NgZone, AfterViewInit, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { products } from './products';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { take } from 'rxjs/operators/take';
import { tap } from 'rxjs/operators/tap';
import { fromEvent } from 'rxjs/observable/fromEvent';

const tableRow = node => node.tagName.toLowerCase() === 'tr';

const closest = (node, predicate) => {
    while (node && !predicate(node)) {
        node = node.parentNode;
    }

    return node;
};

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
            [data]="gridData"
            [height]="410"
            [pageable]="true"
            [skip]="state.skip"
            [pageSize]="state.take"
            (dataStateChange)="dataStateChange($event)">
            <kendo-grid-column field="ProductID" title="ID" width="40">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="250">
            </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category">
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="In stock" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="Discontinued" title="Discontinued" width="120">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    public state: State = {
        skip: 0,
        take: 10
    };
    public gridData: any = process(products, this.state);
    private currentSubscription: Subscription;

    constructor(private renderer: Renderer2, private zone: NgZone) { }

    public ngAfterViewInit(): void {
        this.currentSubscription = this.handleDragAndDrop();
    }

    public ngOnDestroy(): void {
        this.currentSubscription.unsubscribe();
    }

    public dataStateChange(state: State): void {
        this.state = state;
        this.gridData = process(products, this.state);
        this.currentSubscription.unsubscribe();
        this.zone.onStable.pipe(take(1))
            .subscribe(() => this.currentSubscription = this.handleDragAndDrop());
    }

    private handleDragAndDrop(): Subscription {
        const sub = new Subscription(() => { });
        let draggedItemIndex;

        const tableRows = Array.from(document.querySelectorAll('.k-grid-content tr'));
        tableRows.forEach(item => {
            this.renderer.setAttribute(item, 'draggable', 'true');
            const dragStart = fromEvent(item, 'dragstart');
            const dragOver = fromEvent(item, 'dragover');
            const drop = fromEvent(item, 'drop');

            sub.add(dragStart.pipe(
                tap(({ dataTransfer }) => {
                    try {
                        // Firefox won't drag without setting data
                        dataTransfer.setData('application/json', {});
                    } catch (err) {
                        // IE doesn't support MIME types in setData
                    }
                })
            ).subscribe(({ target }) => {
                draggedItemIndex = target.rowIndex;
            }));

            sub.add(dragOver.subscribe((e: any) => e.preventDefault()));

            sub.add(drop.subscribe((e: any) => {
                e.preventDefault();
                const dataItem = this.gridData.data.splice(draggedItemIndex, 1)[0];
                const dropIndex = closest(e.target, tableRow).rowIndex;
                this.zone.run(() =>
                    this.gridData.data.splice(dropIndex, 0, dataItem)
                );
            }));
        });

        return sub;
    }
}
