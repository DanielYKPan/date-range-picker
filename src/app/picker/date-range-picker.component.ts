/**
 * date-range-picker.component
 */

import {
    Component, ElementRef, EventEmitter, HostListener, Input, OnInit,
    Output
} from '@angular/core';
import * as dateFns from 'date-fns';

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
    public datePick: IDateRange;
    public range: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly';
    public moment: Date;
    @Input() private dateRange: IDateRange;
    @Output() private dateRangeChange = new EventEmitter<IDateRange>();

    constructor( private elementRef: ElementRef ) {
    }

    public ngOnInit() {
        this.opened = false;
        if (this.dateRange &&
            this.dateRange.from &&
            this.dateRange.to) {
            this.datePick = Object.assign({}, this.dateRange);
        } else {
            this.selectRange('tw');
        }
        this.moment = new Date(this.datePick.from);
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

    public selectRange( range: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly' ): void {
        let today = dateFns.startOfDay(new Date());

        switch (range) {
            case 'tm':
                this.datePick = {
                    from: dateFns.startOfMonth(today),
                    to: dateFns.endOfMonth(today)
                };
                break;
            case 'lm':
                today = dateFns.subMonths(today, 1);
                this.datePick = {
                    from: dateFns.startOfMonth(today),
                    to: dateFns.endOfMonth(today)
                };
                break;
            case 'lw':
                today = dateFns.subWeeks(today, 1);
                this.datePick = {
                    from: dateFns.startOfWeek(today),
                    to: dateFns.endOfWeek(today)
                };
                break;
            default:
            case 'tw':
                this.datePick = {
                    from: dateFns.startOfWeek(today),
                    to: dateFns.endOfWeek(today)
                };
                break;
            case 'ty':
                this.datePick = {
                    from: dateFns.startOfYear(today),
                    to: dateFns.endOfYear(today)
                };
                break;
            case 'ly':
                today = dateFns.subYears(today, 1);
                this.datePick = {
                    from: dateFns.startOfYear(today),
                    to: dateFns.endOfYear(today)
                };
                break;
        }

        this.range = range;
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
