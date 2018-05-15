---
title: OData and Progress Data Sources
page_title: OData and Progress Data Sources - Data Sources - Kendo UI Builder
description: "Use the OData and Progress Data sources when working with the Kendo UI Builder."
slug: odataprogressdatasource_kuib
position: 2
---

# OData and Progress Data Sources

When you add or edit an OData and Progress data source, you can set their defined table and fields, and search for or navigate to the data provider table from which the application will draw its data.

<img src="../../images/kuib-editdatasource-odata-progress.png" class="img-responsive" alt="Editing oDataSource"/>

To move the entire list of fields back and forth between the **Included Fields** and **Excluded Fields** lists, use the **Include all** and **Exclude all** buttons respectively. Only the fields in the **Included Fields** list are visible in the view components. For example, if you include only the **FirstName** and **LastName** fields and add a Grid to a Blank view, the selection of the data source will automatically populate only the **First Name** and **Last Name** columns the Grid.

When you select a particular field in the **Included Fields** list, you can specify the `label` and `editor type` properties. The `label` is used as the column head and/or the field label in the view at runtime. The `editor type` specifies the UI component that presents the field for editing at runtime. You can select an editor type based on the underlying type for the given field. For example, a date field might offer the option of a text input editor or a date input editor (Date Picker).

> To display a read-only field on an otherwise editable form, enter plain text as the editor type. This approach is useful for auto-generated fields, such as a primary key field whose value is maintained on the server.

In both data sources you can check or uncheck the **Client-side processing** checkbox which indicates that the application will retrieve all its data from the data source before the view is visualized,  and perform data presentation operations such as sorting, filtering, and paging on the client side. Otherwise, only a page of data is retrieved from the data source for display in the view on demand and all these presentation operations are performed on the server side.

* For oDataSource and ProgressDataSource, if client-side processing is not selected, the data service must support code for processing the request.
* For an OpenEdge Data Object Service, the Business Entity implements this service. Business Entities support a JSON Filter Pattern (JFP) that the Read operation method interprets by executing this code and a `count` method that provides the total number of the read records. You are prompted to enter the name of this `count` method if the client-side processing is not selected.

## Suggested Links

* [Adding OData Endpoints]({% slug odata_kuib %})
* [Adding Generic REST Endpoints]({% slug rest_kuib %})
* [Adding Progress Data Endpoints]({% slug progressdata_kuib %})
* [Overview of the Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
