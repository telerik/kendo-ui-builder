---
title: Blank
page_title: Blank - Views - Kendo UI Builder
description: "Learn how to customize views and implement them in your project when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: blankview_kuib
---

# Blank View

The Blank view is the user-defined view that is provided by the Builder.

## Features

* Represents an empty view which enables you to define a custom functionality and layout.
* Allows you to specify multiple data sources.
* Supports the creation of responsive layout by dragging and dropping rows and columns.
* Provides options for adding, modifying, and removing the [built-in]({% slug overviewcomp_kuib %}) or [custom components]({% slug customcomponents_kuib %}) within the view.

## Preview

<img src="../images/kuib-views-blank.png" class="img-responsive" alt="Blank View"/>

## Blank View Data Sources

To start working with a Blank view, you need to define data source instances for it which you can later bind to most of its components. The definition of the data source instances is done based on from one or more of the existing data sources that are defined for your app data providers. From the **View Properties** pane, you can add and review one or more data source instances to be used in your Blank view. When you define a data-sources

<img src="../images/kuib-views-data-sources.png" class="img-responsive" alt="Blank View Data Sources"/>

## Using Blank View Data Source Instances

A data source is used with components that work with a set of records. A **model (or data model)** is used to represent the values of a single data source record. The Kendo UI Builder automatically creates a data model for every data source instance created for a view. When a component works with a data model, the binding is two-way, and the UI and the data are always in sync. For example, to create a view with a grid and a form, the grid is bound to the data source and the form fields are “bound” through their data model. When a row is selected in the grid, the framework automatically copies the values from the data source into the data model of the same name, so the currently selected record is shown in the form.

Every component that works with data has a **Model** property which points to the name of the model created over the data-source definition and runtime is represented by a record of the data-source. Most of these model-bound components have two fields to specify their Model property, one field to specify the data model itself and a second field to specify the field from that model whose value the editor displays or updates.
In addition, the list components also have the option to specify a single field from their model to represent the value of the component. They all have a **Value Primitive** checkbox property that when selected provides a two-field Model property similar to other model-bound editor components to select both the data model and its value field - for example **DropDownList** Component.

## Editing the layout

The blank view supports a responsive layout based on [bootstrap grid](https://getbootstrap.com/docs/4.0/layout/grid/) for different screen sizes based on display type. Four display types are supported for the blank view&mdash; **Desktop**, **Laptop**, **Tablet Landscape** and **Tablet Portrait**. The two basic layout elements in the blank view are rows and columns. You can drag and drop these elements from the **Components** palette&mdash;
* Row&mdash;Rows act as containers for columns. Rows allows only columns to be dropped into them.
* Column&mdash;Once a row has been added, you can drag and drop one or more columns into that row. The columns allows dropping rows or other components into them, but you are not allowed to drop columns into columns. You can delete columns and their contents by clicking on the thick top border and then clicking the trash can icon. When you select a column you can edit their properties. Following are most important for the layout&mdash;
    * **Column widths**&mdash;You can specify, or change the width (Column span) of the column for each screen size. There are 12 "slots" available for columns in each row, and a column can take up one or more slots. For example, you can have 12 columns that span one slot each, or three columns that span four slots each.

    > Note that the Tablet Landscape width is required and will be used for all screen sizes unless you enter a different width for the other screen sizes (Desktop, Laptop, and Tablet Portrait).
    * **Hide on**&mdash;You can hide a column on a given screen size by selecting the checkbox for that screen width. You can use this feature to provide more details on larger screens while minimizing the content shown for smaller devices.

> Dragging any other component into a row automatically creates a column for it if you have not already dragged and dropped one.

> Use the display type preview at the top right of the toolbar to view the results of any changes to the layout.

## Components
* The Blank view offers a variety of data management, editing, scheduling, and charting components. For the full components list please refer to [Components]({% slug overviewcomp_kuib %})
* Like the predefined, data-driven views, the Blank view also provides the option for a custom section:
    * Custom Section&mdash; You can add your own custom HTML code in this section. The **Designer** automatically generates a **topSection.html** file for you in the folder `app\src\modules\[module-name]\[view-name]`. Add your custom HTML code to this file as desired. This file is typically used to add template code for the **Template** properties of content components added to the **Blank View**.

    > Unlike the custom section files generated for the predefined, data-driven views, none of the HTML content added to the the Blank view's topSection.html file is visible in the view.

## Suggested Links

* [Views]({% slug viewsoverview_kuib %})
