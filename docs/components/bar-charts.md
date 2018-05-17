---
title: Bar Charts
page_title: Bar Charts - Components - Kendo UI Builder
description: "Use and implement the Bar Charts when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: barcharts_kuib
---

# Bar Charts

The Bar Charts are part of the Charts components which the Builder supports.

## Usage

* Show data by using horizontal or vertical bars whose lengths vary according to their value.
* Suitable for displaying a comparison between several sets of data. For example, for showing a summary of unique and total site visitors over a certain period of time.

## Properties of Interest

* **Data Source**&mdash;The name of a data source instance that you have defined in the Blank view. For more information, refer to the article on [Blank view data sources]({% slug blankview_kuib %}#toc-blank-view-data-sources).
* **Model**&mdash;The data model that is associated with this component. For more information, refer to the article on [using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* Events
    * **Series Click Event Function**&mdash;Fired when the user clicks an item series in the chart.
    * (AngularJS only) **Data Bound Event Function**&mdash;Represents a function that runs when the chart is bound to its data source.

    > Include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI Bar Charts for Angular](https://www.telerik.com/kendo-angular-ui/components/charts/series-types/bar/)
* [Kendo UI Bar Charts for jQuery](https://demos.telerik.com/kendo-ui/bar-charts/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
