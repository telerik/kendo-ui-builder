---
title: Numeric Text Box
page_title: Numeric Text Box - Components - Kendo UI Builder
description: "Use and implement the Numeric Text Box when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: numerictextbox_kuib
---

# Numeric Text Box

The Numeric Text Box is part of the Editors components which the Builder supports.

## Usage

* Represents a text box for user input.
* Lets the user edit and submit specific numeric values by typing or by using the spin buttons.

## Properties of Interest

* **Format**&mdash;Can be used to customize the way the data is shown in the component. For more information on date formatting options, refer to the articles on [AngularJS number formatting](https://docs.telerik.com/kendo-ui/framework/globalization/numberformatting), and [Angular formatting](https://www.telerik.com/kendo-angular-ui/components/internationalization/parsing-and-formatting/).
* **Model**&mdash;The data model associated with this component. For more information refer to the article on [Using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Events**
    * **Change Event Function**&mdash;Fired when the value of the widget is changed by the user.

    > You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI NumericTextBox for Angular](https://www.telerik.com/kendo-angular-ui/components/inputs/numerictextbox/)
* [Kendo UI NumericTextBox for jQuery](https://demos.telerik.com/kendo-ui/numerictextbox/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
