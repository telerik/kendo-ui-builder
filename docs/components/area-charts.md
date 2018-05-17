---
title: Area Charts
page_title: Area Charts - Components - Kendo UI Builder
description: "Use and implement the Area Charts when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: areacharts_kuib
---

# Area Charts

The Area Charts are part of the Charts components which the Builder supports.

## Usage

* Suitable for displaying quantitative data by using continuous lines.
* The different colors in an Area Chart are useful for emphasizing changes in values which come from several sets of similar data.

## Properties of Interest

* **Data Source**&mdash;The name of a data source instance that you have defined in the Blank view. For more information refer to the article on [Blank view data sources]({% slug blankview_kuib %}#toc-blank-view-data-sources).
* **Model**&mdash;The data model associated with this component. For more information refer to the article on [Using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Events**
    * **Series Click Event Function**&mdash;Fired when the user clicks on an item series in the chart.
    * (AngularJS only) **Data Bound Event Function**&mdash;Represents a function that runs when the charts is bound to its data source.

    > You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI Area Charts for Angular](https://www.telerik.com/kendo-angular-ui/components/charts/series-types/area/)
* [Kendo UI Area Charts for jQuery](https://demos.telerik.com/kendo-ui/area-charts/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
