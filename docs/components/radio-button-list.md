---
title: Radio Button List
page_title: Radio Button List - Components - Kendo UI Builder
description: "Use and implement the Radio Button List when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: radiobuttonlist_kuib
---

# Radio Button List

The Radio Button List is part of the Editors components which the Builder supports.

## Usage

* Represents a list of items where each node is listed next to a radio button.
* Allows selection by checking the corresponding radio button.
* The selected button represents the value of the specified field from the corresponding record.

## Properties of Interest

* **Model**&mdash;The data model that is associated with this component. For more information, refer to the article on [using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Change Event Function**&mdash;Fired when the value of the component is changed by the user.

    > Include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
