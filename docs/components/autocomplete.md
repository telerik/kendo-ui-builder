---
title: Auto Complete
page_title: Auto Complete - Components - Kendo UI Builder
description: "Use and implement the Auto Complete when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: autocomplete_kuib
---

# Auto Complete

The Auto Complete is part of the Editors components which the Builder supports.

## Usage

* Represents a form component.
* Provides suggestions depending on the typed text.

## Properties of Interest

* **Data Source**&mdash;The name of a data source instance that you have defined in the Blank view. For more information refer to the article on [Blank view data sources]({% slug blankview_kuib %}#toc-blank-view-data-sources).
* **Model**&mdash;The data model associated with this component. For more information refer to the article on [Using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Events**
    * **Change Event Function**&mdash;Fired when the value of the widget is changed by the user.
    * **Filtering Event function**&mdash;Fired when the widget is about to filter the data source.
    * (AngularJS only)**Select Event Function**&mdash;Fired when an item from the suggestion popup is selected by the user.

    > You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI AutoComplete for Angular](https://www.telerik.com/kendo-angular-ui/components/dropdowns/autocomplete/)
* [Kendo UI AutoComplete for jQuery](https://demos.telerik.com/kendo-ui/autocomplete/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
