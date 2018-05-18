---
title: List View
page_title: List View - Components - Kendo UI Builder
description: "Use and implement the List View component when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: listview_kuib
---

# List View

The List View is part of the Data Management components which the Builder supports.

> The Builder supports List View components only for AngularJS applications.

## Usage

* Represents collection of items with defined by developer template.
* Support paging with build in pager component.
* Provides different ways to arrange and display the item list.

## Properties of Interest

* **Data Source**&mdash;The name of a data source instance that you have defined in the Blank view. For more information, refer to the article on [Blank view data sources]({% slug blankview_kuib %}#toc-blank-view-data-sources).
* **Model**&mdash;The data model that is associated with this component. For more information, refer to the article on [using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Template Function**&mdash;Represents a function that returns the HTML for a Kendo UI [`template`]
(https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/configuration/template).
* **Template Id**&mdash;Represents the ID of an HTML `template`. If specified, the `template` must be defined in the `\app\src\modules\[module-name]\[view-name]\topSection.html` file. If both a **Template Function** and a **Template Id** are specified, the **Template Id** takes precedence.
* **Edit Template Function**&mdash;Represents a function that returns the HTML for a Kendo UI [`editTemplate`] which is used for the ListView items during edit mode.(https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/configuration/edittemplate).
* **Edit Template Id**&mdash;Represents the ID of an HTML `editTemplate`. If specified, the `editTemplate` must be defined in the `\app\src\modules\[module-name]\[view-name]\topSection.html` file. If both an **Edit Template Function** and an **Edit Template Id** are specified, the **Edit Template Id** takes precedence.
* Events
    * **Cancel Event Function**&mdash;Represents a function that runs when the user clicks the **cancel** button.
    * **Select Event Function**&mdash;Represents a function that runs when a List View item is selected by the user.
    * **Data Bound Event Function**&mdash;Represents a function that runs when the List View is bound to its data source.
    * **Edit Event Function**&mdash;Represents a function that runs when the List View enters edit mode.
    * **Remove Event Function**&mdash;Represents a function that runs before an existing data source record is deleted in the item.
    * **Save Event Function**&mdash;Represents a function that runs when a data item is saved.

    > Include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI ListView for jQuery](https://demos.telerik.com/kendo-ui/listview/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
