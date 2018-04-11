---
title: Introduction
page_title: Introduction | Kendo UI Builder
description: "Welcome to the Kendo UI® Builder by Progress® tool for creating and managing Angular and AngularJS-based web applications."
slug: intro_kuib
position: 0
---

# Introduction to Kendo UI Builder

Kendo UI® Builder by Progress® (Kendo UI Builder) is a tool for creating and managing web applications.

The Builder separates the user interface (UI) settings (views and modules) from the business logic of the project which runs on the application server. The UIs are specifically used to revamp existing business applications and enable them to support the implementation of Kendo UI components.

The Builder tool also delivers extension points for customizing the styles, templates, views, and components from which the deployable application is generated, and supports the creation of Angular and AngularJS-based projects. For more information on the framework-specific features, refer to [Frameworks]().

## Basic Concepts

The data definition is stored in JSON meta-data that is separate from the UI implementation. The meta-data is then used by the integrated Generator to generate the HTML5, CSS, and JavaScript files that are built for the application. The generation of the application also allows you to immediately preview the project in the Kendo UI Designer by applying live data. You can then deploy the application to separate web servers for further development testing and production.

You design a web app from inputs that include a set of Kendo UI templates from which you can select to create functional views within one or more app modules. Each module can contain one or more user-created views, and each view can be bound to one or more data source tables that you select, depending on the view. You can have multiple [data providers]({% slug dataproviders_kendouibuilder %}) defined for an app, and depending on the view, you can select one or more of these data providers from which to then bind [data sources]({% slug datasources_kendouibuilder %}) to that view. Some user-created views bind to only one data source at a time, while others allow binding to multiple data sources.

[Modules]({% slug modules_kendouibuilder %}) and [their views]({% slug views_kendouibuilder %}), data providers and their data sources, can all be configured with corresponding properties. These property settings then help to define the meta-data for your app, which is saved separately for each module and data provider that you define.

Finally, you can customize each view with code extensions for both view event handlers and custom sections that are available in the layout of every view. There are also additional extension points available for both basic and more advanced app customization.

## Building Blocks

Basically, the Builder provides its options through the delivery of [modules](#toc-modules), [data providers](#toc-data-providers), and [extension points](#toc-extension-points).

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

* Views&mdash;Provide the setting and outlook options for the current application page.
    * The [system views]({% slug ... %}) are built-in and cannot be edited.
    * The [predefined views]({% slug ... %}) offer a predefined layout which can be used in the application either as they are or after you update them.
    * The [custom (user-defined) view]({% slug ... %}) is the Blank view which can be created and customized according to the requirements of the business project. The user-defined view allows you to add, edit, or remove both predefined and custom components.  
* Components&mdash;Represent the widgets that will be rendered by the application and can be added to a Blank view.
    * The [predefined components]({% slug ... %}) offer a predefined layout which can be used in the application either as they are or after you update them.
    * The [custom (user-defined) component]({% slug ... %}) is a blank component which can be created and customized according to the requirements of the business project.

The modules and the views which enable you to manage the application UI comprise the [Kendo UI Designer]({% slug getstarted_kdesigner %}).

### Data Providers

The data providers are responsible for the data connectivity of the application. They provide services for establishing the connection between the data you want to display and the data source you want to use.
* The [data services]({% slug ... %}) support the input of third-party or custom service endpoints.
* The [data sources]({% slug ... %}) contain the datasets and enable you to display all the available data or only a specific data portion.

### Extension Points

The extension points are the parts of the web application that you can customize.
* The [style extension points]({% slug ... %}) deliver global customization options that apply to the application level as well as custom settings for the current theme, view, or component.  
* The [template extension points]({% slug ... %}) deliver customization options for specific content rendering and content processing optimization.
* The [view extension points]({% slug ... %}) deliver customization options that can be applied to a particular view.  
* The [component extension points]({% slug ... %}) deliver customization options that can be applied to a particular component.

## Suggested Links

* [Kendo UI Designer]()
* [Modules]()
* [Views]()
* [Components]()
* [Data Providers]()
* [Extension Points]()
* [Frameworks]()
