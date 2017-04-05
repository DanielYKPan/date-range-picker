/**
 * app.component
 */

import { Component, OnInit } from "@angular/core";
import { IDateRange } from 'ng-pick-daterange';

@Component({
    selector: 'yk-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    public dateRange: IDateRange;

    public theme: string = 'default';

    constructor() {
    }

    ngOnInit(): void {
    }
}
