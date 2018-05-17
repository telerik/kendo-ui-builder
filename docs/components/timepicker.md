---
title: Time Picker
page_title: Time Picker - Components - Kendo UI Builder
description: "Use and implement the Time Picker when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: timepicker_kuib
---

# Time Picker

The Time Picker is part of the Editors components which the Builder supports.

## Usage

* Represents a time-list.
* Allows users to select a time value from a predefined time drop-down menu or to enter a new time value.

## Properties of Interest

* **Time Format**&mdash;Can be used to customize the way the data is shown in the component. For more information on date formatting options, refer to the articles on [AngularJS date formatting]( http://docs.telerik.com/kendo-ui/framework/globalization/dateformatting), and [Angular formatting](https://www.telerik.com/kendo-angular-ui/components/internationalization/parsing-and-formatting/).
* **Model**&mdash;The data model associated with this component. For more information refer to the article on [Using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Events**
    * **Change Event Function**&mdash;Fired when the value of the widget is changed by the user.

    > You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI TimePicker for Angular](https://www.telerik.com/kendo-angular-ui/components/dateinputs/timepicker/)
* [Kendo UI TimePicker for jQuery](https://demos.telerik.com/kendo-ui/timepicker/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
