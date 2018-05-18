---
title: Data Grid
page_title: Data Grid - Views - Kendo UI Builder
description: "Learn how to use the predefined Data Grid view which is provided by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: datagrid_kuib
---

# Data Grid View

The Data Grid view is one of the built-in views that are provided by the Builder for facilitating common use-case scenarios.

## Features

* Represents a Grid component with a title and top, middle, and bottom sections.
* Supports CRUD (create, read, update, and delete) data operations.
* Supports editing through the **Incell**, **Inline**, and **Popup** modes.
* Supports error handling.
* Allows you to set and edit its basic functionalities. For more information on the settings that are subject to modification, refer to the right-hand vertical toolbar (property grid) of the view.
* Includes custom sections where you can add your own HTML. Each section is identified in the view design page with a placeholder which contains descriptive text.
    * Custom top HTML section&mdash;Located in the area above **Header Title**.
    * Custom middle HTML section&mdash;Located in the area below **Header Title** and above **Grid**.
    * Custom bottom HTML section&mdash;Located in the area below **Grid**.

    For Angular, the Builder generates these files in the `\app\src\app\modules\[module-name]\[view-name]\` folder. For AngularJS, the Builder generates these files in the `\app\src\modules\[module-name]\[view-name]\` folder. Add your custom HTML code to the generated files and use the **Edit** option on each custom HTML section to edit the corresponding file from within the Builder.

## Preview

<img src="../../images/kuib-views-data-grid.png" class="img-responsive" alt="Data-Gid View"/>

## Properties of Interest

* **Data Provider**&mdash;Represents a drop-down with all the data providers that are added to the application.
* **Data Source**&mdash;When you select a data provider, the data source drop-down is automatically populated with all data sources that are available for this provider.

> Since the Data Grid view contains a Grid component, all properties of the Grid component are also available in the Data Grid view. For more information on specific Grid properties, refer to the article on the [Grid component]({% slug grid_kuib %}).

## Suggested Links

* [Views]({% slug viewsoverview_kuib %})
