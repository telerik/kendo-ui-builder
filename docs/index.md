---
title: Introduction
page_title: Introduction | Kendo UI Builder
description: "Welcome to the Kendo UI® Builder by Progress® tool for creating and managing Angular and AngularJS-based web applications."
slug: intro_kuib
position: 0
---

# Introduction to Kendo UI Builder

Kendo UI® Builder by Progress® is a tool for creating and managing web applications.

The Builder provides the toolset for creating web-based user interfaces separately from the project business logic which runs on the application server through the Kendo UI Designer. It also delivers extension points for customizing the styles, templates, views, and components from which the deployable web application is generated and supports the creation of Angular and AngularJS-based web applications. For more information on the framework-specific features, refer to [Frameworks]().

## Building Blocks

The Builder provides its options through the delivery of [modules](#toc-modules), [data providers](#toc-data-providers), and [extension points](#toc-extension-points).

<!-- diagram -- >

KUIB -> Modules         -> Views          -> System
                                          -> Predefined
                                          -> Custom (Blank)    -> Components    -> Predefined
                                                                                -> Custom
    -> Data Providers   -> Data Services
                        -> Data Sources
    -> Extension Points -> Style          -> Theme
                                          -> View
                                          -> Application
                        -> Template
                        -> View
                        -> Component

### Modules

The modules are the building blocks of each web application and consist of:

* Views&mdash;The Builder views provide the setting and outlook options of the current web application page.
    * The [system views]({% slug ... %}) are built-in and cannot be changed.
    * The [predefined views]({% slug ... %}) provide a predefined layout, allow you to edit them, and can be used in the application as they are.
    * The [user-defined views]({% slug ... %}) are blank views that can be customized according to the requirements of your project.
* Components&mdash;The Builder components represent the widgets that will be rendered by the web application.
    * The [predefined components]({% slug ... %}) provide a predefined layout, allow you to edit them, and can be used in the application as they are.
    * The [user-defined components]({% slug ... %}) are blank components that can be customized according to the requirements of your project.

### Data Providers

The data providers are responsible for the data connectivity of the web application. They provide services for establishing the connection between the data you want to display and the data source you want to use.
* The [data services]({% slug ... %}) support the input of custom or third-party service endpoints.
* The [data sources]({% slug ... %}) contain the datasets and enable you to display only specific data portion.

### Extension Points

The extension points are the parts of the web application that you can customize.
* The [styles extension points]({% slug ... %}) deliver global customization options that apply to the application level as well as custom settings for the current theme, view, or component.  
* The [templates extension points]({% slug ... %}) deliver customization options for specific content rendering and content processing optimization.
* The [views extension points]({% slug ... %}) deliver customization options that can be applied to a particular view.  
* The [components extension points]({% slug ... %}) deliver customization options that can be applied to a particular component.

## Suggested Links

* [Modules]()
* [Views]()
* [Components]()
* [Data Providers]()
* [Extension Points]()
* [Frameworks]()
