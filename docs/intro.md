---
title: Introduction
page_title: Introduction - Documentation - Kendo UI Builder
description: "Welcome to the Kendo UI® Builder by Progress® tool for creating and managing Angular and AngularJS-based web applications."
slug: intro_kuib
position: 0
---

# Introduction to Kendo UI Builder

Progress<sup>®</sup> Kendo UI<sup>®</sup> Builder is a tool for creating and managing high-performance, responsive web applications which support the implementation of Kendo UI components.

## Overview

* Utilizes the contemporary HTML, CSS, and JavaScript technologies.
* Separates the user interface (UI) from the project business logic which runs on the application server.
* Provides extension points for customizing the functional units of the web project.
* Delivers access to predefined visual components for easily setting up the layout and content of the web application.
* Saves a significant amount of efforts and time otherwise needed for web development.

## Supported Frameworks

* [Angular]({% slug frameworks_kuib%}#toc-supported-versions)
* [AngularJS]({% slug frameworks_kuib %}#toc-supported-versions)

## Building Blocks

* [Modules](#toc-modules)
* [Views](#toc-views)
* [Components](#toc-components)
* [Data providers](#toc-data-providers)
* [Extension points](#toc-extension-points)

<img src="../images/building_blocks_intro_kuib.png" class="img-responsive" alt="The Building Blocks of the Kendo UI Builder"/>

### Modules

* Modules are the functional units of the web application.
* Each module represents a collection of views.
* With the creation of each new application, the Builder provides the built-in [App Module]({% slug appmodule_kuib %}) which contains predefined, system views.
* While you build your web application, you can add, modify, and remove the modules your project requires.
* [Module features, types, and capabilities]({% slug modulesoverview_kuib %})
* [Adding, editing, reordering, and deleting modules]({% slug designingtheapp_kuib %})

### Views

* Views are part of the modules and provide the settings that are available for each page of the web application.
* The [system views]({% slug viewsoverview_kuib %}#toc-system) are predefined and are only available in the App Module.
* The [built-in views]({% slug viewsoverview_kuib %}#toc-built-in) are delivered by the Builder out of the box. Their predefined layout, look, and feel aim at facilitating the implementation of the most common scenarios.
* The [user-defined view]({% slug viewsoverview_kuib %}#toc-user-defined) is the Blank view. The Blank and the App Layout views are the only views which allow the usage and further modification of components.  
* The Builder also supports the implementation of [custom views]({% slug customviews_kuib %}) in your web project.

### Components

* Components can be used in the [Blank]({% slug blankview_kuib %}) and [App Layout]({% slug applayout_kuib %}) views only.  
* The [built-in components]({% slug overviewcomp_kuib %}) are delivered by the Builder out of the box. Similar to views, their predefined layout, look, and feel aim at facilitating the implementation of the most common scenarios. Based on the similar features they deliver, the components are grouped into subsets such as Data Management or Layout components.
* The Builder also supports the implementation of [custom components]({% slug customcomponents_kuib %}) in your web project.  

### Data Providers

* Data providers handle the data connectivity of the application.
* They support the input of third-party and custom service endpoints, and utilize the respective available [data sources]({% slug datasources_kuib %}).

### Extension Points

The extension points enable you to customize specific aspects of the generated web project.

* [Custom code]({% slug customcode_kuib %})&mdash;With custom code you can handle different events from the components or application lifecycle
* [Custom templates]({% slug customtemplates_kuib %})&mdash;Allows you to define complex monolitic and reusable structures
* [Custom styles]({% slug customstyles_kuib %})&mdash;The custom CSS extension point allows you to personalize the appearance of the web application.
* [Custom themes]({% slug customthemes_kuib %})&mdash;Enables you to extend the existing package.json with your own packages.
* [Extending `package.json`]({% slug extendingpackages_kuib %})&mdash;Create your own company brand compliant themes and use them seamlessly
* [Extending the HTML head]({% slug extendinghead_kuib %})&mdash;You can add elements, such as custom code or links, to the head of the generated web project.

## Styling Options

* [Using the predefined Kendo UI themes]({% slug stylingthemesoverview_kuib %})
* [Building custom themes with Progress<sup>®</sup> Sass ThemeBuilder](http://themebuilder.telerik.com/)
* [Developing your custom themes]({% slug customthemes_kuib %})

## Progress OpenEdge Integration

* [Official Progress<sup>®</sup> Software Documentation](https://www.progress.com/documentation/kendo-ui-builder)
* [Developing a Progress OpenEdge Web App Using Kendo UI Builder](https://www.progress.com/services/education/openedge/developing-an-openedge-web-app-using-kendo-ui-builder)

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Frameworks]({% slug frameworks_kuib %})
* [Data Providers]({% slug dataprovidersoverview_kuib %})
* [Modules]({% slug modulesoverview_kuib %})
* [Views]({% slug viewsoverview_kuib %})
* [Components]({% slug overviewcomp_kuib %})
* [Extension Points]({% slug extensionpoints_kuib %})
