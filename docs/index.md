---
title: Introduction
page_title: Introduction | Kendo UI Builder
description: "Welcome to the Kendo UI® Builder by Progress® tool for creating and managing Angular and AngularJS-based web applications."
slug: intro_kuib
position: 0
---

# Introduction to Kendo UI Builder

Kendo UI<sup>®</sup> Builder by Progress<sup>®</sup> is a tool for creating and managing high-performance, responsive web applications which support the implementation of Kendo UI components.

The Builder separates the user interface (UI) from the project business logic which runs on the application server. Currently, the tool supports the Angular and AngularJS frameworks.

The Builder enables you to easily define the layout and content of the web applications by providing access to predefined visual components. Based on the Kendo UI framework and utilizing the contemporary Angular, AngularJS, HTML, CSS, and JavaScript technologies, the Builder significantly saves the efforts and time otherwise needed for web development.

The Kendo UI Builder also provides extension points for customizing the functional units of the application. The style the generated application, you can simply use the predefined Kendo UI themes or import a custom theme created with the [Progress<sup>®</sup> Sass Theme Builder](http://themebuilder.telerik.com/).

For more information on how to use the Kendo UI Builder for creating or updating OpenEdge business applications, refer to the [official Progress<sup>®</sup> Software Documentation](https://www.progress.com/documentation/kendo-ui-builder).  

## Building Blocks

Basically, the Builder provides its options through the delivery of [modules](#toc-modules) and [data providers](#toc-data-providers), and [extension points](#toc-extension-points) which enable you to customize specific aspects of the generated application.

<img src="images/building_blocks_intro_kuib.png" class="img-responsive" alt="The Building Blocks of the Kendo UI Builder"/>

### Modules, Views, and Components

The modules are the functional units of the web application and each module represents a collection of views. With the creation of the application, the Builder provides the built-in App Module which contains predefined, system views. While building your web application, you can add, modify, and remove as many modules as your project requires. For more information, refer to the documentation on [modules]({% slug modulesoverview_kuib %}).

The views provide the settings and functionalities that are available for each application page.
* The [system views]({% slug viewsoverview_kuib %}#toc-system) are built-in views located in the App Module.
* The [built-in views]({% slug viewsoverview_kuib %}#toc-predefined) offer a predefined layout which cannot be modified. They aim at facilitating the implementation of the most common use cases.
* The [user-defined view]({% slug viewsoverview_kuib %}#toc-blank) is the Blank view. It allows you to add, edit, or remove both predefined and custom components, and to modify its layout and functionalities according to the requirements of your business project.  
* The Builder also allows you to implement custom views you have created.   

The components can be used in the Blank view only.  
* The [built-in components]({% slug overviewcomp_kuib %}) offer a predefined set of functionalities. Based on the similar features they deliver, the components are grouped into subsets such as Data Management or Layout components.
* The Builder also allows you to implement custom components you have created.   

### Data Providers

The data providers handle the data connectivity of the application.
* The [data services]({% slug odata_kuib %}) support the input of third-party or custom service endpoints.
* The [data sources]({% slug datasources_kuib %}) contain the sets of data.

### Extension Points

The extension points are the properties which allow you to customize parts of the web application.
* The [custom themes]({% slug extendingthemes_kuib %}) represent extension points for customizing the appearance of the application.  
* The [custom CSS]({% slug extendingcss_kuib %}) represent extension points for customizing the styles of the application.
* The [custom code]({% slug extendingcode_kuib %}) represents the extension point for customizing the backend of the application.  
* The [custom views]({% slug extendingviews_kuib %}) represent the extension points for customizing the views of the application.
* The [custom components]({% slug extendingcomponents_kuib %}) represent the extension points for customizing the components of the application.

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Modules]({% slug modulesoverview_kuib %})
* [Views]({% slug viewsoverview_kuib %})
* [Components]({% slug overviewcomp_kuib %})
* [Data Providers]({% slug dataprovidersoverview_kuib %})
* [Extension Points]({% slug extensionpoints_kuib %})
* [Frameworks]({% slug frameworks_kuib %})
