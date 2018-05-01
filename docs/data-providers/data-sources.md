---
title: Data Sources
page_title: Data Sources - Data Providers - Kendo UI Builder
description: "Use the data sources which are supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: datasources_kuib
position: 2
---

# Data Sources

A data source represents an abstraction, a meta description for the data which is returned by an endpoint.

In the context of the Builder, the data sources are columns and rows (tables) with existing data that come with and are located in the selected OData, Progress Data, or generic REST data provider. Depending on the data you need to render on a specific page or within a given section of your web project, you can choose which of the columns and rows to add to each view or component with drag-and-drop.  

## Types of Data Sources

> The default option for automatic creation of data sources is available when you add OData and Progress Data providers. Due to the specifics of the generic REST data service, you have to always create and relate the data sources manually.  

By default, when you add a data provider to your web project, the **Auto-create Data Sources** option on the **Add Data Provider** dialog box is checked. As a result, the Builder automatically establishes a relation between the data sources of a data provider and is able to add them to views and components which need to render data in a hierarchical order&mdash;for example, the Hierarchical Data Grid or Stacked Data Grids views.

When you add a data provider to your web project, you can deselect the **Auto-create Data Sources** option on the **Add Data Provider** dialog box and choose to create the data sources manually. In this case, the Builder does not automatically relate the data sources which means that you have to manually add the data sources after you create the respective data provider and to manually establish a relation between them.

## Data Binding

When a component works with a data model, it applies a two-way binding, and the UI and the data are always in sync. However, no association between the model and a JSDO data source exists. To move values from the model to the data source, you need to use a programmatic approach.

This data-binding approach simplifies the creation of a form which is either associated or not with a data-bound control. For example, to create a view with a grid and a form, the grid has to be bound to the data source and the form fields have to associated with the data model. When the user selects a grid row, the framework automatically copies the values from the data source into the same-named data model and the currently selected record is displayed in the form. When you edit a form field, the data model gets updated. However, these changes are not automatically pushed back to the data source and you need to handle this issue manually.

## Suggested Links

* [Adding OData Endpoints]({% slug odata_kuib %})
* [Adding Generic REST Endpoints]({% slug rest_kuib %})
* [Adding Progress Data Endpoints]({% slug progressdata_kuib %})
* [Overview of the Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
