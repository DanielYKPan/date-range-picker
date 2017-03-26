/**
 * date-range-picker.component
 */

import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

// webpack1_
declare let require: any;
const myDpStyles: string = require('./date-range-picker.component.scss');
const myDpTpl: string = require('./date-range-picker.component.html');
// webpack2_

interface IDateRange {
    from: Date;
    to: Date;
}

@Component({
    selector: 'app-date-range',
    template: myDpTpl,
    styles: [myDpStyles],
})
export class DateRangePickerComponent implements OnInit {

    public opened: false | 'from' | 'to';
    public dateRange: IDateRange;

    constructor( private elementRef: ElementRef ) {
    }

    public ngOnInit() {
        this.opened = false;
        this.dateRange = {
            from: new Date(),
            to: new Date(),
        };
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

    @HostListener('document:click', ['$event'])
    private handleBlurClick( e: MouseEvent ) {
        let target = e.srcElement || e.target;
        if (!this.elementRef.nativeElement.contains(e.target)
            && !(<Element> target).classList.contains('day-num')) {
            this.opened = false;
        }
    }
}
