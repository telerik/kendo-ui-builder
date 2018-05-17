---
title: Slider
page_title: Slider - Components - Kendo UI Builder
description: "Use and implement the Slider when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: slider_kuib
---

# Slider

The Slider is part of the Editors components which the Builder supports.

## Usage

* Provides options for increasing, decreasing, and selecting predefined values.
* Enables users to define values by dragging the handle along the track or by clicking the side arrow buttons.

## Properties of Interest

* **Model**&mdash;The data model associated with this component. For more information refer to the article on [Using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Events**
    * **Change Event Function**&mdash;Fired when the value of the widget is changed by the user.
    * **Slide Event Function**&mdash;Fires when the user moves the drag handle.
    > You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI Slider for Angular](https://www.telerik.com/kendo-angular-ui/components/inputs/slider/)
* [Kendo UI Slider for jQuery](https://demos.telerik.com/kendo-ui/slider/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
