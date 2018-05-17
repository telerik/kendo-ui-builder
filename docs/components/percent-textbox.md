---
title: Percent Text Box
page_title: Percent Text Box - Components - Kendo UI Builder
description: "Use and implement the Percent Text Box when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: percenttextbox_kuib
---

# Percent Text Box

The Percent Text Box is part of the Editors components which the Builder supports.

## Usage

* Represents a text box for user input with predefined format for percent values only.
* Use this when the percent values in the database must be multiplied by 100 before appending the % symbol for proper display (e.g., the database value of 0.256 will be displayed as 25.6%).

## Properties of Interest

* **Model**&mdash;The data model that is associated with this component. For more information, refer to the article on [using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Change Event Function**&mdash;Fired when the value of the component is changed by the user.

    > Include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI TextBox for Angular](https://www.telerik.com/kendo-angular-ui/components/inputs/textbox/)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
