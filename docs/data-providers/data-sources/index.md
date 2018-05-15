---
title: Overview
page_title: Overview - Data Sources - Kendo UI Builder
description: "Use the different types of data sources and apply their specifics when working with the Kendo UI Builder."
slug: datasources_kuib
position: 1
---

# Data Sources

A data source represents an abstraction, a meta description for the data which is returned by an endpoint.

In the context of the Builder, the data sources are like tables with fields and corresponding settings. Depending on the data you need to render on a specific page or within a given section of your web project, you can choose which of the table fields to add to each view or component by dragging and dropping.

## Types

> * The default option for automatic creation of data sources is available when you add OData and Progress Data providers. Due to the specifics of the generic REST data service, you have to always create and relate the data sources manually.
> * If you create one or more views which use a data source and then come back to change some of the details of that data source (for example, labels or editor types), those changes will be reflected in the views you have already created.

By default, when you add a data provider to your web project, the **Auto-create Data Sources** option on the **Add Data Provider** dialog box is checked. As a result, the Builder automatically establishes a relation between the data sources of a data provider and is able to add them to views and components which need to render data in a hierarchical order&mdash;for example, the Hierarchical Data Grid or Stacked Data Grids views.

When you add a data provider to your web project, you can deselect the **Auto-create Data Sources** option on the **Add Data Provider** dialog box and choose to create the data sources manually. In this case, the Builder does not automatically relate the data sources which means that you have to manually add the data sources after you create the respective data provider.

## Specifics

All three types of provider data sources have fields. In the OData and Progress Data data sources, the fields and their properties are auto-populated based on the metadata that comes from the catalog file (for Progress Data) or metadata (for OData). In the generic REST data source, you have to add the data sources manually because the generic REST data providers do not possess a schema or metadata.

* [OData and Progress Data sources]({% slug odataprogressdatasource_kuib %})
* [Generic REST data source]({% slug restdatasource_kuib %})

## Suggested Links

* [Adding OData Endpoints]({% slug odata_kuib %})
* [Adding Generic REST Endpoints]({% slug rest_kuib %})
* [Adding Progress Data Endpoints]({% slug progressdata_kuib %})
* [Overview of the Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
