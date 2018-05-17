---
title: Tab Strip
page_title: Tab Strip - Components - Kendo UI Builder
description: "Use and implement the Tab Strip when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: tabstrip_kuib
---

# Tab Strip

The Tab Strip is part of the Navigation components which the Builder supports.

## Usage

* Represents a collection of tabs with associated content.
* Enables users to switch between different tab views inside a single component.
* To add tabs to a Tab Strip, refer to the **Items** property of the Tab Strip that is further described. To add contents to an existing tab:
    1. Select the tab from the Tab Strip by its label text in the drop-down menu next to the **Trash bin** icon. The selected tab opens.
    1. Drag at least one layout row to the tab, then drag additional components to that row or to other rows that you added to the tab. Follow the [Blank view layout rules]({% slug blankview_kuib %}#toc-layout).

## Preview

<img src="../../images/kuib-tabstrip-items.png" class="img-responsive" alt="Items"/>

## Properties of Interest

* **TabStrip Items**&mdash;To add or remove tabs from the Tab Strip, click **Edit**.
* **Events**
    * **Select Event Function**&mdash;Fired when the user selects a tab in the Tab Strip.
    * (AngularJs only)**Show Event Function**&mdash;Fired when the selected tab displays its contents.

    > Include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI TabStrip for Angular](https://www.telerik.com/kendo-angular-ui/components/layout/tabstrip/)
* [Kendo UI TabStrip for jQuery](https://demos.telerik.com/kendo-ui/button/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
