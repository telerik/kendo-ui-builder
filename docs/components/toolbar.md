---
title: Tool Bar
page_title: Tool Bar - Components - Kendo UI Builder
description: "Use and implement the Tool Bar when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: toolbar_kuib
---

# Tool Bar

The Tool Bar is part of the Navigation components which the Builder supports.
> The Builder supports Tool Bar components only for AngularJs application.

## Usage

* Represents a graphical element for holding input elements.
* Provides different types of items, such as buttons, toggle buttons, split buttons, button groups, and other customized elements.

## Preview
<img src="../images/kuib-toolbar-items.png" class="img-responsive" alt="Blank View"/>

## Properties of Interest

* **Toolbar Items**&mdash;Click Edit to open an advanced editor window where you can add or remove items on the toolbar.
* **Events**
    * **Click Event Function**&mdash;Fired when the user clicks a button in the toolbar.
    * **Toggle Event Function**&mdash;Fired when the user toggles a button in the toolbar.

    > You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI Toolbar for jQuery](https://demos.telerik.com/kendo-ui/toolbar/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
