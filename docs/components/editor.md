---
title: Editor
page_title: Editor - Components - Kendo UI Builder
description: "Use and implement the Editor when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: editor_kuib
---

# Editor

The Editor is part of the Editors components which the Builder supports.
> The Builder supports Editor components only for AngularJs application.

## Usage

* Allows users to edit HTML content in a what-you-see-is-what-you-get way.
* Provides configuration options for editing and formatting its content such as text formatting, hyperlinks, lists, and image handling.


## Properties of Interest

* **Model**&mdash;The data model associated with this component. For more information refer to the article on [Using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Events**
    * **Change Event Function**&mdash;Fired when the value of the widget is changed by the user.

    > You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).


## Suggested Links

* [Kendo UI Editor for jQuery](https://demos.telerik.com/kendo-ui/editor/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
