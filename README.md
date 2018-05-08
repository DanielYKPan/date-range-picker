
# Angular Date Range Picker

**Angular date range picker - Angular reusable UI component**

## Description
Simple Angular date range picker. Online demo is [here](https://danielykpan.github.io/date-range-picker/). 
This picker is responsive design, so feel free to try it in your desktops, tablets and mobile devices. 
This picker uses javascript library [date-fns](https://date-fns.org/)

## Installation

To install this component, follow the procedure:

1. __Install with [npm](https://www.npmjs.com):`npm install ng-pick-daterange --save`__
2. __Also you need to install with [npm](https://www.npmjs.com):`npm i date-fns`__
3. Add __DateRangePickerModule__ import to your __@NgModule__ like example below
    ```js
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { MyTestApp } from './my-test-app';

    import { DateRangePickerModule } from 'ng-pick-daterange';

    @NgModule({
        imports:      [ BrowserModule, DateRangePickerModule ],
        declarations: [ MyTestApp ],
        bootstrap:    [ MyTestApp ]
    })
    export class MyTestAppModule {}
    ```
4. If you are using __systemjs__ package loader add the following dateRangePicker properties to the __System.config__:
    ```js
    (function (global) {
        System.config({
            paths: {
                'npm:': 'node_modules/'
            },
            map: {
                // Other components are here...

                'ng-pick-daterange': 'npm:ng-pick-daterange',
            },
            packages: {
                // Other components are here...

				// the picker
                'ng-pick-daterange': {
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
