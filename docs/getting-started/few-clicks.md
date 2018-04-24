---
title: With a Few Clicks
page_title: With a Few Clicks | Kendo UI Builder
description: "Learn the basic approaches you can apply to easily and quickly build your web application with the Kendo UI Builder."
slug: fewclicks_kuib
position: 5
---

# With a Few Clicks

The development process of web applications with the Builder aims at applying approaches that are easy to grasp and put into practice.

The data definitions of the application are stored in JSON metadata that is separate from the UI implementation. The metadata is then used by the integrated Generator to compile the HTML5, CSS, and JavaScript files that are built for and used by the application. The generation of the application also allows you to immediately preview the project in the Builder by applying live data. For further development testing and production, you can then deploy the application to separate web servers.

To create functional views within one or more modules, you need to include a set of Kendo UI or custom components. Each module can contain one or more user-defined (custom) or built-in views and, depending on the data you want to render, you can bind each view to one or more data sources. The Builder allows you to define multiple data providers for an application&mdash;depending on the specific view, you can select one or more data providers and bind that view to a portion of the data or to all the data from a data source. As a result, some views can be bound to one data source at a time while others can be bound to multiple data sources.

By using their corresponding properties, you can configure the [modules]({% slug modulesoverview_kuib %}) and their [views]({% slug viewsoverview_kuib %}), and the [data providers]({% slug dataprovidersoverview_kuib %}) and their [data sources]({% slug datasources_kuib %}). These properties help define the application metadata which is separately saved for each module and data provider that you define.

You can also customize each view through code extensions, which manage its event handlers, and the custom sections in the view layout. Other available extension points relate to the customization of themes, CSS, and components.

## Suggested Links

* [Dashboard]({% slug dashboard_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
* [Debugging and Releasing]({% slug debugging_kuib %})
* [Frequently Asked Questions]({% slug faq_kuib %})
* [Troubleshooting]({% slug troubleshooting_kuib %})
