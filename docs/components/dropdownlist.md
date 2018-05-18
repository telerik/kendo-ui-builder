---
title: Drop Down List
page_title: Drop Down List - Components - Kendo UI Builder
description: "Use and implement the Drop Down List when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: dropdownlist_kuib
---

# Drop Down List


The Drop Down List is part of the Editors components which the Builder supports.

## Usage

* Lets users choose a single predefined value from a list.
* Can be related as a parent-child pair to support cascading. A cascading Drop Down List is a series of two or more Drop Down Lists where each Drop Down List is filtered based on the selected option in the previous Drop Down List.

## Properties of Interest

* **Data Source**&mdash;The name of a data source instance that you have defined in the Blank view. For more information, refer to the article on [Blank view data sources]({% slug blankview_kuib %}#toc-blank-view-data-sources).
* **Model**&mdash;The data model that is associated with this component. For more information, refer to the article on [using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* Events
    * **Change Event Function**&mdash;Fired when the value of the component is changed by the user.
    * (AngularJS only) **Select Event Function**&mdash;Fired when an item from the suggestion popup is selected by the user.

    > Include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI DropDownList for Angular](https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdownlist/)
* [Kendo UI DropDownList for jQuery](https://demos.telerik.com/kendo-ui/dropdownlist/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
