---
title: Combo Box
page_title: Combo Box - Components - Kendo UI Builder
description: "Use and implement the Combo Box when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: combobox_kuib
---

# Combo Box

The Combo Box is part of the Editors components which the Builder supports.

## Usage

* Lets users choose from a list of options.
* Can be related as a parent-child pair to support cascading. A cascading Combo Box is a series of two or more Combo Boxes where each Combo Box is filtered based on the selected option in the previous Combo Box.

## Properties of Interest

* **Data Source**&mdash;The name of a data source instance that you have defined in the Blank view. For more information refer to the article on [Blank view data sources]({% slug blankview_kuib %}#toc-blank-view-data-sources).
* **Model**&mdash;The data model associated with this component. For more information refer to the article on [Using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Events**
    * **Change Event Function**&mdash;Fired when the value of the widget is changed by the user.
    * **Filtering Event function**&mdash;Fired when the widget is about to filter the data source.
    * (AngularJS only)**Select Event Function**&mdash;Fired when an item from the suggestion popup is selected by the user.

    > You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI ComboBox for Angular](https://www.telerik.com/kendo-angular-ui/components/charts/series-types/area/)
* [Kendo UI ComboBox for jQuery](https://www.telerik.com/kendo-angular-ui/components/dropdowns/combobox/)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
