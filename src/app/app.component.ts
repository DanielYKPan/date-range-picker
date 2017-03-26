/**
 * app.component
 */

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'yk-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    public rangeValue: any;

    constructor() {
    }

    public ngOnInit(): void {
    }
}
