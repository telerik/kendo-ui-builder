---
title: Views
page_title: Views | Kendo UI Builder
description: "In the Kendo UI Designer application, views are the screens that make up each module."
slug: views_kendouibuilder
position: 5
---

# Views

Views are the screens that make up each [module]({% slug modules_kendouibuilder %}).

The Designer provides two types of views:
* Data-driven&mdash;Composed of predefined templates that the Designer populates with your data sources.
* Custom&mdash;Also known as Blank views. The modules you create can contain one or more views that you can customize.

## Types of Views

### Login

The built-in Application module contains login page and landing page views, which are initially available for you.

For more information, refer to the tutorial on [adding and editing Login views]({% slug editblankviews_tutorials_kuib %}).

### Data-Grid

Data-Grid views represent read-only, table-like displays of the information in the data source. The data source itself determines the organization and display type of the data.

For more information, refer to the tutorial on [adding and editing Data-Grid views]({% slug editblankviews_tutorials_kuib %}).

### Data-Grid-Form

Data-Grid-Form views are split screens featuring a Data-Grid view and a form display showing the information in a selected row. This view can be read-only or user-editable. If editing is enabled, users edit information in the form display.

For more information, refer to the tutorial on [adding and editing Data-Grid-Form views]({% slug editblankviews_tutorials_kuib %}).

### Data-Grid-Separate-Form

Data-Grid-Separate-Form views are similar to the Data-Grid-Form. However, they render only the Data-Grid view unless users select a row. The information from that row is then shown as a form display on a separate screen. If editing is enabled, the screen switches to a form display suitable for editing.

For more information, refer to the tutorial on [adding and editing Data-Grid-Separate-Form views]({% slug editdatagridseparateformviews_tutorials_kuib %}).

### Blank

Blank views allow you to create your own custom view by dragging and dropping rows and columns to create a layout and then adding functional components to it.

The Blank view template supports a variety of components for you to define a view instance, including layout (rows and columns), data management (e.g., editable Grid), editor (e.g., Text Box), scheduling (e.g., Calendar), navigation (e.g., Toolbar), and custom HTML components. With these components you can implement a wide variety of view instances with a look and feel limited only by the components that you include and the layouts you specify.

The Blank view also allows you to specify multiple data source instances per view instance. These data source instances can be bound to different content components, often with the use of corresponding models that represent data items (records in the data source). However, the display and update of data in a view instance requires additional programming, depending on the components you include in the view and how their data bindings are implemented. This programming is aided by generated view factory and template (custom section) files, as well as a helper class for accessing data sources used in the view.

For more information, refer to the tutorial on [adding and editing Blank views]({% slug editblankviews_tutorials_kuib %}).

## Getting Started/Configuration

...

## See Also

* [Editing Views]({% slug editloginviews_tutorials_kuib %})
* [Data Providers]({% slug dataproviders_kendouibuilder %})
* [Data Sources]({% slug dataprovidersandsources_kendouibuilder %})
* [Modules]({% slug modules_kendouibuilder %})
* [Quick Start Guide]({% slug quickstartguide_kendouibuilder %})
