---
title: Data Sources
page_title: Data Sources | Kendo UI Builder
description: "In the Kendo UI Designer application, data sources are single tables found within data providers."
slug: datasources_kendouibuilder
position: 3
---

# Data Sources

Data sources are single tables found within [data providers]({% slug dataproviders_kendouibuilder %}).

## Overview

The data sources represent tables from the single data service that you can bind to views. This data service can represent a single point of authentication for one or more services and represents the URI of a server web application that supports the specified services.

The services deliver access to one or more resources which provide the tables you can specify to define the data sources for the data provider. Each service is defined by a catalog&mdash;a JSON file on the web server you can specify by using its URI. The data provider definition also identifies the authentication model required to access the data server (web application) it supports.

To specify the data server, use the following options:

* Anonymous
* Basic
* Form

You can create the data sources automatically or manually. To use the automatic approach, define the data sources when you first create the data provider. To use the manual approach, define the data sources by adding them to the data provider after you create it.

For more information, refer to the tutorial on [how to add and edit data sources]({% slug editsources_tutorials_kuib %}).

## Data Binding

The Kendo UI Builder automatically creates a data model for every data source instance created for a view. A data model is used to represent the values of a single record. From an ABL point of view, you can think of a model for a data source instance as a buffer for a temp-table. When a component works with a data model, the binding is two-way, and the UI and the data are always in sync. However, there is NO association between the model and any JSDO data source. Moving values from the model to the data source must be done programmatically by the developer.

This simplifies the use case of the developer creating a form, either associated with a data-bound control or not. For example, to create a view with a grid and a form, the grid would be bound to the data source and the form fields would be “bound” to the data model. When a row is selected in the grid, the framework will automatically copy the values from the data source into the data model of the same name, so the currently selected record will be shown in the form. When you edit the form fields, the data model is updated; however, these changes are not automatically pushed back to the data source. The developer is responsible for this action and can use the helper [dsService API]({% slug ... %}).

The controls that use a data model are:
* Editors
* ComboBox
* DropDownList

The ComboBox and DropDownList are unique in that they have both a data source and a data model. The data source represents the list of available values, and the data model holds the selected item. You can think of a ComboBox or a DropDownList as a DropDownList (data source) combined with a text field (data model).

## Getting Started/Configuration

...

## See Also

* [Editing Data Sources]({% slug editsources_tutorials_kuib %})
* [Data Providers]({% slug dataproviders_kendouibuilder %})
* [Modules]({% slug modules_kendouibuilder %})
* [Views]({% slug views_kendouibuilder %})
* [Quick Start Guide]({% slug quickstartguide_kendouibuilder %})
