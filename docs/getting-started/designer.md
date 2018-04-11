---
title: Getting Started with Kendo UI Designer
page_title: Getting Started with Kendo UI Designer | Kendo UI Builder
description: "Get started with the Kendo UI Designer tool for designing, building, and previewing one-page web applications with responsive user interfaces for business application projects."
slug: getstarted_kuib
position: 1
---

# Getting Started with Kendo UI Designer

Kendo UI Builder separates the user interface settings from the business logic of the project. The UI configuration options are delivered by the modules and views and are known under the common name of Kendo UI Designer.

The Kendo UI Designer is part of the [Kendo UI® Builder by Progress®]({% slug overview_kendouibuilder %}).

## Overview

The Designer is an application that allows you to visually design, build, and preview one-page web applications with responsive user interfaces (UI) for business projects. It uses a collection of predefined, data-driven views and allows the creation of custom layouts by dragging and dropping components into a blank view. The development of the UI is based on Kendo UI, Bootstrap, and AngularJS.

For more information on how to create applications with the Kendo UI Designer, refer to the [Quick Start Guide]({% slug quickstartguide_kendouibuilder %}).

For more information on how to use the Kendo UI Designer with OpenEdge business applications, refer to the [Progress<sup>®</sup> Software Documentation web site](https://documentation.progress.com/index.html#page/progdocindex/kendo-ui-builder-by-progress.html).  

## Getting Started

The data definition is stored in JSON meta-data that is separate from the Kendo UI implementation. The meta-data is then used by the integrated Kendo UI Generator to generate the HTML5/CSS and JavaScript files that you build for an application. The application generation also allows you to immediately preview the app in the Designer using live data. You can then eventually deploy the app to separate web servers for further development testing and production.

You design a web app from inputs that include a set of Kendo UI templates from which you can select to create functional views within one or more app modules. Each module can contain one or more user-created views, and each view can be bound to one or more data source tables that you select, depending on the view. You can have multiple [data providers]({% slug dataproviders_kendouibuilder %}) defined for an app, and depending on the view, you can select one or more of these data providers from which to then bind [data sources]({% slug datasources_kendouibuilder %}) to that view. Some user-created views bind to only one data source at a time, while others allow binding to multiple data sources.

[Modules]({% slug modules_kendouibuilder %}) and [their views]({% slug views_kendouibuilder %}), data providers and their data sources, can all be configured with corresponding properties. These property settings then help to define the meta-data for your app, which is saved separately for each module and data provider that you define.

Finally, you can customize each view with code extensions for both view event handlers and custom sections that are available in the layout of every view. There are also additional extension points available for both basic and more advanced app customization.

### Prerequisites

The Kendo UI Designer requires the following prerequisites:

* Windows 64-bit.
* ...
* ...

## Installation

> By default, the installation of Kendo UI Builder stops all running application instances. Because this might lead to loss of data, make sure you stop any such instances.

1. If not already created, set up your client account at ...
1. Go to .. and click the Windows Installer.

  > The Windows Installer notifies that you need Node.js but does not install it automatically.

1. Click `KendoUIBuilder.exe` to download the Builder. The `.rar` file is automatically stored in ...
1. Click ... to open the Builder and load the dashboard.  

## Uninstallation

1. Go to ...
1. Right-click ...
1. Select ...

## Suggested Links

* [Troubleshooting]()
* [Frequently Asked Questions]()
* [Modules]()
* [Views]()
* [Components]()
* [Data Providers]()
* [Extension Points]()
* [Frameworks]()
