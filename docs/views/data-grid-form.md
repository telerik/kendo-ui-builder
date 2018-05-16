---
title: Data Grid Form
page_title: Data Grid Form - Views - Kendo UI Builder
description: "Learn how to use the predefined Data Grid Form view which is provided by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: datagridform_kuib
---

# Data Grid Form View

The Data Grid Form view is one of the built-in views that are provided by the Builder for facilitating common use-case scenarios.

## Features

* Represents a Grid component with a data-driven form for CUD operations. When the user makes a selection in the Grid, the model of the form is updated accordingly.
* The ratio between the Grid and the form is 2:3.
* Supports CRUD (create, read, update, and delete) data operations.
* You can enable selected item editing by setting the **Read-Only-to-Editing** mode (true by default) or to use data form as details view in read only mode by setting the **Read-Only** Edit mode.
* Supports error handling.
* Allows you to set and edit its basic functionalities. For more information on the settings that are subject to modification, refer to the right-hand vertical toolbar (property grid) of the view.

The view also includes custom sections where you can include your own HTML. Each section is identified in the view design page with a placeholder containing descriptive text:

* Custom top HTML section&mdash;Located in the area above **Header Title**.
* Custom middle HTML section&mdash;Located in the area below **Header Title** and above **Grid** and **Data Form**.
* Custom bottom HTML section&mdash;Located in the area below **Grid** and **Data Form**.

The Builder automatically generates these files in the `\app\src\modules\[module-name]\[view-name]\` folder and you need to add your custom HTML code to these files. The **Edit** option on each custom HTML section allows you to edit the corresponding file from within the Builder.
## Preview

<img src="../images/kuib-views-data-grid-form.png" class="img-responsive" alt="Data-Grid-Form View"/>

## Specific Properties

* **Data Provider**: A drop down with all data providers added to the application.
* **Data Source**: When you select a data provider the datasource dropdown will be automatically populated with all avalalbe datasources for this provider. Based on that meta the grid columns and all form fields will be populated automatically. Later on you can change grid column properties or form fields properties via coresponding **Edit Columns** and **Edit Form Fields** windows.

> Since the grid-view has a grid component into it all properties from the grid component are also exposed. For more information about specific grid properties see [grid component]({% slug grid_kuib %}).

* ** Form Fields**: From the Form Fields dialog, you can change several properties of the fields displayed in the form:

    * You can use the Include all and Exclude all buttons to move the entire list of fields back and forth between **Included Fields** and **Excluded Fields** lists.
    * By default all fields are put into one field group with the default label. You can change the label by clicking the group item, which displays the **Name** property under **Properties** where you can enter a new label value. You can use the **+ Add Group** button to add one or more field groups to the **Included Fields** list with the default label. You can populate any field group by clicking the down arrow on the group item to open it and dragging and dropping fields from one field group to any other open field group. At runtime, field groups are displayed as tab folders on the form.
    * When you select an field item in the **Included Fields** list, you can view or set the properties:
        * **Label Text**: A field label that you can change from the default, which is the Label set for the selected field in the view data source.
        * **Field Name**: Read-only name of the selected field in the list.
        * **Format**: This can be used to customize how the field is presented. Use the argument {0} to represent the content of the field. You can also add additional text to be displayed. For more information on number and date formatting options see [AngularJs number formatting](http://docs.telerik.com/kendo-ui/framework/globalization/numberformatting), [Angularjs date formatting]( http://docs.telerik.com/kendo-ui/framework/globalization/dateformatting), [Angular formatting](https://www.telerik.com/kendo-angular-ui/components/internationalization/parsing-and-formatting/)
        * You can also set additional properties and events under **Editor Type**. These are properties and events for the specified editor type. Since the form fields underlying components are the same components as in the **Blank View** refer to [components]({% slug overviewcomp_kuib %}) documenation articles for specific properties use and configuration.

<img src="../images/kuib-form-fields.png" class="img-responsive" alt="Form Fields window"/>


## Suggested Links

* [Views]({% slug viewsoverview_kuib %})
