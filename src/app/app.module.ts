/**
 * app.module
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// App root styles
import '../sass/main.scss';

// custom modules, services, components, directives and pipes
import { DateRangePickerModule } from './picker';

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

