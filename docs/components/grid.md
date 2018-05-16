---
title: Grid
page_title: Grid - Components - Kendo UI Builder
description: "Use and implement the Grid component when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: grid_kuib
---

# Grid

The Grid is part of the Data Management components which the Builder supports.

## Usage

* Displays data in a tabular format.
* Provides configuration options for managing the rendered data such as editing, filtering, grouping, and sorting.

## Preview

// screen or demo?

## Specific Properties

* **Columns**: Represents a list with grid columns. After selecting the value in data-source combo-box the columns collection will be automataically populated based on the fields metadata in the selected datasource. Since the columns property is a collection a special editor is used for it. It is opened when the Grid Columns property **Edit** button is clicked. In this advanced property editor you can choose to include or exclude columns and different columns properties:
    * **Template**: Represents the template which will be rendered in the column content. For more information refer to kendo ui documentation: [AngularJs](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/columns.template)  or [Angular](https://www.telerik.com/kendo-angular-ui/components/grid/columns/templates/)
    * **Enable HTML Encoding**: If set to true the column value will be HTML-encoded before it is displayed. If set to false the column value will be displayed as is. By default the column value is HTML-encoded.
    * **Use Editor type '[Component Name]'**: When you define your datasource with fields, each field has autoselected Editor Type based on underying data type. You can change this in the [**Edit Data Source** window in the designer's provider view]({% slug odataprogressdatasource_kuib %}). Based on this edit type the grid will render corespoding component when it is put in edit mode. In this case the components are the same components which are exposed in blank view for drag-drop. When the checkbox is checked the corresponding component properties can be changed via rendered property grid on the right side. If this checkbox is not selected the grid will use build in editors.

// Screeenshot

* Events
    * **Row Select Event Function**: The name of a function that runs when a grid row is selected by the app user.
    * **Row Create Event Function**: The name of a function that runs before a row is created for a new data source record.
    * **Row Update Event Function**: The name of a function that runs before an existing data source record is updated in the row.
    * **Row Delete Event Function**: The name of a function that runs before an existing data source record is deleted in the row.
You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

* (AngularJs only) **Row Template Function**: The name of a function that returns the html for a Kendo UI [rowTemplate](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/rowtemplate). If specified, the row template is used to format all the rows in the grid unless you also define an altRowTemplate.
* (AngularJs only) **Row Template Id**:  The ID of an HTML rowTemplate. If specified, the rowTemplate must be defined in either the `\app\src\modules\[module-name]\[view-name]\topSection.html` file. If both a Row Template Function and a Row Template Id are specified, the Row Template Id takes precedence.
* (AngularJs only) **Alt Row Template Function**: The name of a function that returns the html for a Kendo UI [altRowTemplate](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/altrowtemplate). If specified, the altRowTemplate is used to format every other row in the grid.
* (AngularJs only) **Alt Row Template Id**: The ID of an HTML altRowTemplate. If specified, the altRowTemplate must be defined in either the `\app\src\modules\[module-name]\[view-name]\topSection.html` file. If both an Alt Row Template Function and an Alt Row Template Id are specified, the Row Template Id takes precedence.


## Suggested Links

* [Kendo UI Grid for Angular](https://www.telerik.com/kendo-angular-ui/components/grid/)
* [Kendo UI Grid for jQuery](https://demos.telerik.com/kendo-ui/grid/index)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
