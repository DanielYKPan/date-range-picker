
# Angular 2 Date Range Picker

**Angular 2 date range picker - Angular2 reusable UI component**

## Description
Simple Angular2 date range picker. Online demo is [here](https://danielykpan.github.io/date-range-picker/). 
This picker is responsive design, so feel free to try it in your desktops, tablets and mobile devices. 
This picker uses javascript library [date-fns](https://date-fns.org/)

## Installation

To install this component, follow the procedure:

1. __Install with [npm](https://www.npmjs.com):`npm install yk-date-range-picker --save`__
2. Add __DateRangePickerModule__ import to your __@NgModule__ like example below
    ```js
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { MyTestApp } from './my-test-app';

    import { DateRangePickerModule } from 'yk-date-range-picker';

    @NgModule({
        imports:      [ BrowserModule, DateRangePickerModule ],
        declarations: [ MyTestApp ],
        bootstrap:    [ MyTestApp ]
    })
    export class MyTestAppModule {}
    ```
3. If you are using __systemjs__ package loader add the following dateRangePicker properties to the __System.config__:
    ```js
    (function (global) {
        System.config({
            paths: {
                'npm:': 'node_modules/'
            },
            map: {
                // Other components are here...

                'yk-date-range-picker': 'npm:yk-date-range-picker',
            },
            packages: {
                // Other components are here...

				// the picker
                'yk-date-range-picker': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
            }
        });
    })(this);
    ```
    
## Usage

Use the following snippet inside your template. For example:

```html
<app-date-range [(dateRange)]="dateRange"></app-date-range>
```
<p>Or:</p>

```html
<app-date-range [dateRange]="dateRange" (dateRangeChange)="setReturnValue($event)"></app-date-range>
```
```typescript
public setReturnValue(dateRange: IDateRange): any {
    this.dateRange = dateRange;
    // Do whatever you want to the return object 'dateRange'
}
```
  
## Demo
Online demo is [here](https://danielykpan.github.io/date-range-picker/)

## License
* License: MIT

## Author
* Author: Daniel Pan
