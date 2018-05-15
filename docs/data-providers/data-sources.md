---
title: Data Sources
page_title: Data Sources - Data Providers - Kendo UI Builder
description: "Use the data sources which are supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: datasources_kuib
position: 3
---

# Data Sources

A data source represents an abstraction, a meta description for the data which is returned by an endpoint.

In the context of the Builder, the data sources are like tables with fields and corresponding settings. Depending on the data you need to render on a specific page or within a given section of your web project, you can choose which of the table fields to add to each view or component with drag-and-drop.

## Types of Data Sources

> The default option for automatic creation of data sources is available when you add OData and Progress Data providers. Due to the specifics of the generic REST data service, you have to always create and relate the data sources manually.

By default, when you add a data provider to your web project, the **Auto-create Data Sources** option on the **Add Data Provider** dialog box is checked. As a result, the Builder automatically establishes a relation between the data sources of a data provider and is able to add them to views and components which need to render data in a hierarchical order&mdash;for example, the Hierarchical Data Grid or Stacked Data Grids views.

When you add a data provider to your web project, you can deselect the **Auto-create Data Sources** option on the **Add Data Provider** dialog box and choose to create the data sources manually. In this case, the Builder does not automatically relate the data sources which means that you have to manually add the data sources after you create the respective data provider.

> If you create one or more views using a data source and then come back to change some of the details of that data source, such as labels and editor types, those changes will be reflected in the views you have already created.

## Data Source Specifics

All three type of providers's datasources has one common thing - the fields. In oData and Progress datasources the fields and their properties are autopopulated based on the meta data comes from catalog file (progress data provider) or metadata (oData provider). On the other side the fields in the generic rest data source need to be added manually by developer since the generic REST data providers do not have schema or meta.

### oDataSource and ProgressDataSource

<img src="../images/kuib-editdatasource-odata-progress.png" class="img-responsive" alt="Editing oDataSource"/>

When you add or edit both datasources you can set the table and fields defined for the data source, search for or navigate to the data provider table from which your app will draw data. You can use the Include all and Exclude all buttons to move the entire list of fields back and forth between Included Fields and Excluded Fields lists.

> Only the fields in the Included Fields list are visible in the views components. For example if you include onlu FirstName and LastName fields and add grid in a blank view. Selecting its datasource with automatically popualte only the Firstname and LastName as avalable columns for the grid component.

When you select a particular field in the Included Fields list, you can specify the Label and Editor Type properties. The Label is used as the column head and/or the field label in the view at run time. The Editor Type specifies the UI component that presents the field for editing at run time. You can select an editor type based on the underlying type for the given field. For example, a date field might offer the option of a text-input editor or a date-input editor (date picker).

> Enter plain-text as the Editor Type to display a field as read-only on an otherwise editable form. This is useful for auto-generated fields, such as a primary key field whose value is maintained on the server.

In both datasources you can check/uncheck Client-side processing checkbox which indicate your app will retrieve all data from the data source before the view is visualized and perform data presentation operations (sorting, filtering, and paging operations) on the client side.
Otherwise, only a page of data is retrieved from the data source to display in the view on demand, and all these presentation operations are performed on the server side.

> For oDataSource and ProgressDataSource if client-side processing is not selected, the data service must support code for processing the request.

> For an OpenEdge Data Object Service, this is implemented in the Business Entity. Business Entities support a JSON Filter Pattern (JFP) that the Read operation method interprets by executing this code and a count method that provides the total number of records read. (You are prompted to enter the name of this count method if Client-side processing is not selected.)

### RestDataSource

<img src="../images/kuib-editdatasource-odata-progress.png" class="img-responsive" alt="Editing RestDataSource"/>

Since the REST Data Provider does not have posibility for consuming service metadata or a schema you need to add and configure all fields and properties manually. When you add or edit fields you need to specify their name, label and type, then based on the selected type you can choose the right editor for your filed.

To define the supported data source actions, click Data Source Actions to display an expandable list of these actions: Create, Destroy, Read, and Update. For all actions you can specify:
* Type: Select the REST verb for the action, with a default initially selected depending on the action. For example, the default verb for the Create action is POST.
* URL: Enter the URI for the action object relative to the Base URI specified for the data provider.

The RestDataSource has some specific settings which are helpfull in case when the endpoints returns or expects the data in different way:

* Id Field: Use the drop-down list to select a data source field that functions as a primary key to the data source.
* Data Field: A field in the server response that returns one or more rows to the data source.
* Total Field: A field in the server response that contains the total number of rows returned in the response.
* Client-side processing: Indicates whether your app will retrieve all data from the endpoint or paged data. If the server side operations are used the data source uses the value returned by Total Field to manage the paging of data on the server.

## Suggested Links

* [Adding OData Endpoints]({% slug odata_kuib %})
* [Adding Generic REST Endpoints]({% slug rest_kuib %})
* [Adding Progress Data Endpoints]({% slug progressdata_kuib %})
* [Overview of the Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
