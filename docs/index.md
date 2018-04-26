---
title: Introduction
page_title: Introduction | Kendo UI Builder
description: "Welcome to the Kendo UI® Builder by Progress® tool for creating and managing Angular and AngularJS-based web applications."
slug: intro_kuib
position: 0
---

# Introduction to Kendo UI Builder

Kendo UI<sup>®</sup> Builder by Progress<sup>®</sup> is a tool for creating and managing high-performance, responsive web applications which support the implementation of Kendo UI components.

The Builder separates the user interface (UI) from the project business logic which runs on the application server. It enables you to easily define the layout and content of the web applications by providing access to predefined visual components.

Currently, the tool supports the Angular and AngularJS frameworks. Based on the Kendo UI framework and through utilizing the contemporary Angular, AngularJS, HTML, CSS, and JavaScript technologies, the Builder significantly saves the efforts and time otherwise needed for web development.

The Builder also provides extension points for customizing the functional units of the application. The style the generated application, you can simply use the predefined Kendo UI themes or import a custom theme created with the [Progress<sup>®</sup> Sass Theme Builder](http://themebuilder.telerik.com/).

For more information on how to use the Builder for creating and updating OpenEdge business applications, refer to the [official Progress<sup>®</sup> Software Documentation](https://www.progress.com/documentation/kendo-ui-builder).  

## Building Blocks

Basically, the Builder provides its options through:
* [Modules](#toc-modules-views-and-components)
* [Data providers](#toc-data-providers)
* [Extension points](#toc-extension-points)

<img src="images/building_blocks_intro_kuib.png" class="img-responsive" alt="The Building Blocks of the Kendo UI Builder"/>

### Modules, Views, and Components

The modules are the functional units of the web application and each module represents a collection of views. With the creation of each new application, the Builder provides the built-in [App Module]({% slug appmodule_kuib %}) which contains predefined, system views. While you build your web application, you can add, modify, and remove the modules your project requires. For more information on handling the module settings, refer to the article on [designing the application]({% slug designingtheapp_kuib %}#toc-module-settings). For more information on the module functionalities, refer to the documentation on the [modules]({% slug modulesoverview_kuib %}).

The views provide the settings and functionalities that are available for each application page and comprise the modules.
* The [system views]({% slug viewsoverview_kuib %}#toc-system) are built-in views located in the App Module.
* The [built-in views]({% slug viewsoverview_kuib %}#toc-predefined) offer a predefined layout. They aim at facilitating the implementation of the most common scenarios.
* The [user-defined view]({% slug viewsoverview_kuib %}#toc-blank) is the Blank view. The Blank view provides options for adding, editing, and removing the predefined and custom components, and allows you to modify its layout and functionalities according to the requirements of your business project.  
* The Builder also allows you to implement any [custom views]({% slug extendingviews_kuib %}) you have created.

The components can be used in the Blank view only.  
* The [built-in components]({% slug overviewcomp_kuib %}) offer a predefined set of functionalities. Based on the similar features they deliver, the components are grouped into subsets such as Data Management or Layout components.
* The Builder also allows you to implement any [custom components]({% slug extendingcomponents_kuib %}) you have created.  

### Data Providers

The data providers handle the data connectivity of the application by supporting the input of third-party or custom service endpoints, and the utilization of the available [data sources]({% slug datasources_kuib %}).

### Extension Points

The extension points enable you to customize specific aspects of the generated application.
* The [theme extension points]({% slug extendingthemes_kuib %}) provide options for customizing the appearance of the application.  
* The [CSS extension points]({% slug extendingcss_kuib %}) provide options for customizing the styles of the application.
* The [code extension points]({% slug extendingcode_kuib %}) provide options for customizing the backend of the application.  
* The [view extension points]({% slug extendingviews_kuib %}) provide options for customizing the views of the application.
* The [component extension points]({% slug extendingcomponents_kuib %}) provide options for customizing the components of the application.

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Modules]({% slug modulesoverview_kuib %})
* [Views]({% slug viewsoverview_kuib %})
* [Components]({% slug overviewcomp_kuib %})
* [Data Providers]({% slug dataprovidersoverview_kuib %})
* [Extension Points]({% slug extensionpoints_kuib %})
* [Frameworks]({% slug frameworks_kuib %})
