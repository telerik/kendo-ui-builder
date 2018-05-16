---
title: Hierarchical Data Grid
page_title: Hierarchical Data Grid - Views - Kendo UI Builder
description: "Learn how to use the predefined Hierarchical Data Grid view which is provided by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: hierarchicaldatagrid_kuib
---

# Hierarchical Data Grid View

The Hierarchical Data Grid view is one of the built-in views that are provided by the Builder for facilitating common use-case scenarios.

## Features

* Represents a Grid component with child grids. The child grids become visible when the users expand a row of the parent Grid.
* Supports CRUD (create, read, update, and delete) data operations only for the child grid.
* Supports editing for the child grids through the **Incell**, **Inline**, and **Popup** modes.
* Supports error handling.
* Allows you to set and edit its basic functionalities. For more information on the settings that are subject to modification, refer to the right-hand vertical toolbar (property grid) of the view.

> In order for the Hierarchical Data Grids view to work properly, the data sources to which you bind the hierarchical grids need to be related. For more information, refer to the articles on [data providers]({% slug dataprovidersoverview_kuib %}).

The view also includes custom sections where you can include your own HTML. Each section is identified in the view design page with a placeholder containing descriptive text:

* Custom top HTML section&mdash; Located in the area above **Header Title**.
* Custom top parent HTML section&mdash; Located in the area below the **Parent Grid Title** but above the parent grid itself.
* Custom top child html section&mdash; Located in the area below the **Child Grid Title** but above the **Child Grid** itself
* Custom bottom child html section&mdash; Located in the area below the **Child Grid**
* Custom bottom HTML section&mdash; Located in the area below **Parent Grid**.

The Builder automatically generates these files in the `\app\src\modules\[module-name]\[view-name]\` folder and you need to add your custom HTML code to these files. The **Edit** option on each custom HTML section allows you to edit the corresponding file from within the Builder.

## Preview

<img src="../images/kuib-views-hierarchical-data-grid.png" class="img-responsive" alt="Hierarchical Data Grid View"/>

## Specific Properties

* **Data Provider**: A drop down with all data providers added to the application.
* **Parent Data Source**: When you select a data provider the data-source dropdown will be automatically populated with all available hierarchical parent data-sources for the selected **Data Provider**.
* **Child Data Source**: When you select a data provider the data-source dropdown will be automatically populated with all available hierarchical child data-sources for the selected **Data Provider**.

> If the provider does not contain related data-sources the **Parent Data Source** and **Child Data Source** will be empty.

> Since the **Hierarchical Grid View** has a parent and children grid components, all properties from the **Grid** component are also exposed. For more information about specific grid properties see [grid component]({% slug grid_kuib %}).

## Suggested Links

* [Views]({% slug viewsoverview_kuib %})
