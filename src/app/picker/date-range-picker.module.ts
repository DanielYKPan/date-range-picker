/**
 * date-range-picker.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from './date-range-picker.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        DateRangePickerComponent
    ],
    declarations: [
        DateRangePickerComponent
    ],
    providers: [],
})
export class DateRangePickerModule {
}
