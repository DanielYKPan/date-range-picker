/**
 * app.module
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DateRangePickerModule } from 'yk-date-range-picker';
import '../sass/main.scss';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DateRangePickerModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

