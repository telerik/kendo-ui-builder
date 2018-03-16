---
title: Excel Export
description: "Export the content of the Kendo UI Grid for Angular to Excel."
slug: excelexport_grid
position: 1
---

# Excel Export

The Grid provides options for exporting its data to Excel.

To enable the Excel export, import the ExcelModule and add the [`kendo-grid-excel`]({% slug api_grid_excelcomponent %}) component to the Grid. To initiate the export, use the [`kendoGridExcelCommand`]({% slug api_grid_excelcommanddirective %}) directive or the [`saveAsExcel`]({% slug api_grid_gridcomponent %}#toc-saveasexcel) method.

{% meta height:550 %}
{% embed_file excel/basic/app.component.ts preview %}
{% embed_file excel/ng.module.ts %}
{% embed_file excel/main.ts %}
{% embed_file common/products.ts %}
{% endmeta %}

## Configuration

With regard to its Excel export, the Grid enables you to:
* [Export specific data](#toc-exporting-specific-data)
* [Customize the exported columns](#toc-customizing-exported-columns)
* [Customize the exported workbooks](#toc-customizing-generated-workbooks)
* [Trigger the export externally](#toc-triggering-export-externally)

### Exporting Specific Data

By default, the Grid exports its current data. To export data that is different from the current Grid data, specify a custom [`fetchData`]({% slug api_grid_excelcomponent %}#toc-fetchdata) function. It returns an [`ExcelExportData`]({% slug api_excel-export_excelexportdata %}) value or array. The `allData()` method takes a collection of data&mdash;typically, but not mandatory, the same collection to which the Grid is bound&mdash;processes it (for example, applies or removes paging, filtering, sorting, and so on), and uses the resulting object to create the workbook.

{% meta height:550 %}
{% embed_file excel/all-pages/app.component.ts %}
{% embed_file excel/ng.module.ts %}
{% embed_file excel/main.ts %}
{% embed_file common/products.ts %}
{% endmeta %}

If the export data needs to be asynchronously loaded, you can return an `Observable` or a `Promise` which will be resolved with the data that is exported.

{% meta height:550 %}
{% embed_file excel/all-pages-observable/app.component.ts %}
{% embed_file excel/all-pages-observable/ng.module.ts %}
{% embed_file excel/main.ts %}
{% embed_file common/northwind.service.ts %}
{% endmeta %}

### Customizing Exported Columns

By default, the Grid exports its current columns. To export columns that are different from the current Grid columns, include the [`<kendo-excelexport-column>`]({% slug api_excel-export_columncomponent %}) and [`<kendo-excelexport-column-group>`]({% slug api_excel-export_columngroupcomponent %}) components inside the `<kendo-grid-excel>` component.

{% meta height:550 %}
{% embed_file excel/customize-columns/app.component.ts %}
{% embed_file excel/ng.module.ts %}
{% embed_file excel/main.ts %}
{% embed_file common/products.ts %}
{% endmeta %}

### Customizing Generated Workbooks

The [`excelExport`]({% slug api_grid_gridcomponent %}#toc-excelexport) event allows you to customize the generated Excel document. The workbook event argument exposes the generated Excel workbook configuration.

{% meta height:550 %}
{% embed_file excel/customize-workbook/app.component.ts %}
{% embed_file excel/ng.module.ts %}
{% embed_file excel/main.ts %}
{% embed_file common/products.ts %}
{% endmeta %}

### Triggering Export Externally

The Grid enables you to trigger the export operation by calling the [`saveAsExcel`]({% slug api_grid_gridcomponent %}#toc-saveasexcel) method.

{% meta height:550 %}
{% embed_file excel/save-as-excel/app.component.ts %}
{% embed_file excel/ng.module.ts %}
{% embed_file excel/main.ts %}
{% embed_file common/products.ts %}
{% endmeta %}

## Known Limitations

* During the export to Excel, the cell and detail column templates of the Grid are not evaluated. Instead, the Grid exports only the data and the field value is serialized to preserve the type information. To tweak the cell content, use an accessor or transform the data in advance.
* During the export to Excel, the Grid does not use column formats. Column formats are incompatible with Excel. For more information, refer to the page on the [Excel-supported formats](https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4?ui=en-US&rs=en-US&ad=US).
* The Grid does not export its detail template to Excel. The reason for this behavior is that the detail template might contain arbitrary HTML which cannot be converted to Excel column values.
* The maximum size of the exported file to Excel has a system-specific limit. For large data sets, it is highly recommended that you use a server-side solution.
* When you export the Grid to Excel in older browsers, such as Internet Explorer 9 and Safari, you have to implement a server proxy. For more information, refer to the [`proxyUrl`]({% slug api_grid_excelcomponent %}#toc-proxyurl) configuration.

## Suggested Links

* [ExcelComponent]({% slug api_grid_excelcomponent %})
* [ExcelCommandDirective]({% slug api_grid_excelcommanddirective %})
* [API Reference of the GridComponent]({% slug api_grid_gridcomponent %})
* [API Index of the Grid]({% slug api_grid %})
