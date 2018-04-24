---
title: Data Sources
page_title: Data Sources - Data Providers - Kendo UI Builder
description: "Use the data sources which are supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: datasources_kuib
position: 5
---

# Data Sources

all is data sources
an abstraction for the data - meta description for the data the endpoint returns

Each data provider is represented by a single service URI. While a data provider defines one data service, you can still define one or more data sources from the same data service to a single data provider. You can also create multiple data providers.

A data service is defined by a JSON file on the web server and you can specify it by using its URI. The data provider definition also identifies the authentication model which is required to access the data server (web application) it supports.

The data sources are the datasets that you render in the application and are located within the data providers.

They represent tables from the single data service that you can bind to views. This data service can be a single point of authentication for one or more services and represents the URI of a server web application that supports the specified services.

You can create the data sources either automatically or manually. To use the automatic approach, define the data sources when you first create the data provider. To use the manual approach, define the data sources by adding them to the data provider after you create it. The Builder automatically creates a data model for every data source instance which you create for a view and uses a data model to represent the values of a single record.

When a component works with a data model, it applies a two-way binding, and the UI and the data are always in sync. However, there is no association between the model and any JSDO data source. To move values from the model to the data source, you need to do use a programmatic approach.

This data-binding approach simplifies the creation of a form which is either associated with a data-bound control or not. For example, to create a view with a grid and a form, the grid has to be bound to the data source and the form fields have to associated with the data model. When the user selects a grid row, the framework automatically copies the values from the data source into the same-named data model and the currently selected record is displayed in the form. When you edit a form field, the data model gets updated&mdash;however, these changes are not automatically pushed back to the data source and you need to handle this issue manually.

## Suggested Links
