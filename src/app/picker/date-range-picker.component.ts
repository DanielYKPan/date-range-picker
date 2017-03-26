/**
 * date-range-picker.component
 */

import { Component, OnInit } from '@angular/core';

// webpack1_
declare let require: any;
const myDpStyles: string = require('./date-range-picker.component.scss');
const myDpTpl: string = require('./date-range-picker.component.html');
// webpack2_

@Component({
    selector: 'app-date-range',
    template: myDpTpl,
    styles: [myDpStyles],
})
export class DateRangePickerComponent implements OnInit {

    public opened: false | 'from' | 'to';

    constructor() {
    }

    public ngOnInit() {
        this.opened = false;
    }

    public toggleCalendar( selection: false | 'from' | 'to' ): void {
        if (!selection) {
            this.opened = false;
        } else if (this.opened && this.opened !== selection) {
            this.opened = selection;
        } else {
            this.opened = this.opened ? false : selection;
        }
    }
}
