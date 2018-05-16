---
title: Data Grid Separate Form
page_title: Data Grid Separate Form - Views - Kendo UI Builder
description: "Learn how to use the predefined Data Grid Separate Form view which is provided by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: datagridseparateform_kuib
---

# Data Grid Separate Form View

The Data Grid Separate Form view is one of the built-in views that are provided by the Builder for facilitating common use-case scenarios.

## Features

* Represents a Grid component with a data-driven form. When the user makes a selection in the Grid, it is hidden and on tis place a data-form is shown with selected model from the grid item.
* The ratio between the Grid and the form field is 1:1&mdash;when the Grid is open, the form field is hidden and vice versa.
* Supports CRUD (create, read, update, and delete) data operations.
* You can enable selected item editing by setting the **Edit Mode** property to **Edit** (set by default) or **Read-Only-to-Edit** mode. To use data form as details view in read only mode set the **Read-Only** Edit mode.
    * **Edit** option: when the grid row is selected the data-form is shown in edit mode with all corresponding rendered editors.
    * **Read-Only-to-Edit**: when the grid row is selected the data-form is shown in read-only mode, but Edit/New buttons are rendered above and bellow it, so the user can put form in edit mode.

> For specific properties in the **Data Grid Separate Form View**, please refer to the [**Grid Form View** documentation]({% slug datagridform_kuib %}), since both views shares the same properties and events.

## Preview

<img src="../images/kuib-views-data-grid-separate-form.png" class="img-responsive" alt="Data Grid Separate Form View"/>

## Suggested Links

* [Views]({% slug viewsoverview_kuib %})
