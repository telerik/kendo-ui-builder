---
title: Date Time Picker
page_title: Date Time Picker - Components - Kendo UI Builder
description: "Use and implement the Date Time Picker when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: datetimepicker_kuib
---

# Date Time Picker

The Date Time Picker is part of the Editors components which the Builder supports.

## Usage

* Represents a combination between a date-picker and a time-picker component.
* Enables users to enter or pick date and time values.
* (Angular only) The Date Time Picker functionality in Angular application is achieved by using a Date Picker next to a Time Picker component.

## Properties of Interest

* **Date Format**&mdash;Can be used to customize the way the data is shown in the component. For more information on date formatting options, refer to the article on [AngularJS date formatting]( http://docs.telerik.com/kendo-ui/framework/globalization/dateformatting) or [Angular formatting](https://www.telerik.com/kendo-angular-ui/components/internationalization/parsing-and-formatting/).
* **Model**&mdash;The data model that is associated with this component. For more information, refer to the article on [using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Change Event Function**&mdash;Fired when the value of the component is changed by the user.

    > Include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI DateTimePicker for jQuery](https://demos.telerik.com/kendo-ui/datetimepicker/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
