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
    public dayNames: string[];
    public dates: Date[];
    @Input() private dateRange: IDateRange;
    @Output() private dateRangeChange = new EventEmitter<IDateRange>();

    constructor( private elementRef: ElementRef ) {
    }

    public ngOnInit() {
        this.opened = false;
        this.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        if (this.dateRange &&
            this.dateRange.from &&
            this.dateRange.to) {
            this.datePick = Object.assign({}, this.dateRange);
            this.moment = new Date(this.datePick.from);
            this.generateCalendar();
        } else {
            this.selectRange('tw');
        }
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
        this.moment = new Date(this.datePick.from);
        this.generateCalendar();
    }

    public generateCalendar(): void {
        this.dates = [];
        let firstDate = dateFns.startOfMonth(this.moment);
        let start = 0 - (dateFns.getDay(firstDate) + 7) % 7;
        let end = 41 + start; // iterator ending point

        for (let i = start; i <= end; i += 1) {
            let day = dateFns.addDays(firstDate, i);
            this.dates.push(day);
        }
    }

    public prevMonth(): void {
        this.moment = dateFns.addMonths(this.moment, -1);
        this.generateCalendar();
    }

    public nextMonth(): void {
        this.moment = dateFns.addMonths(this.moment, 1);
        this.generateCalendar();
    }

    public isWithinRange(day: Date): boolean {
        return dateFns.isWithinRange(day, this.datePick.from, this.datePick.to);
    }

    public isDateRangeFrom( day: Date ): boolean {
        return dateFns.isSameDay(day, this.datePick.from);
    }

    public isDateRangeTo( day: Date ): boolean {
        return dateFns.isSameDay(day, this.datePick.to);
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
