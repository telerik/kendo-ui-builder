---
title: Debugging
page_title: Debugging | Kendo UI Builder
description: "Use the deployment options which are supported by the Kendo UI Builder and debug your project."
slug: debugging_kuib
position: 4
---

# Debugging the Application

The Builder provides the generate, open in browser, start, and build options which you can use for debugging the application while it is still in development and not yet released.

> You can access the options from both the **App Design** page and the toolbar that is available in each view.

## Available Options

* **Generate**&mdash;Generates the latest source code and outputs it in the project location in your file system.
* **Open in Browser**&mdash;Generates the project in its file system location and runs it on your local dev server.
* **Start**&mdash;Generates the latest source code, outputs it in the project location in your file system, and runs it on your local dev server.
* **Build**&mdash;Generates the latest source code and outputs the `build_output/debug` and `build_output/release` local folders. For more information, refer to the article on [bundling and packaging]({% slug bundlepackage_kuib %}).

> The Kendo UI builder provides options to create, develop, and bundle the application files in a pre-release state, but does not actually deploy the web project. Once the project files are built through the **Build** option and depending on issues you might encounter during the debugging or deployment process, you can either:
> * Deploy the `release` version in your desired environment, or
> * Copy the `debug` version and debug the application directly in your desired environment.

// screen

## The Process

To debug the application: 

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Start** > **Open in Browser** to locally review the application in your default browser.
1. Access the Builder files and edit them.
1. On the Toolbar, click **Generate**. As a result, the generated code gets updated, the browser is refreshed, and the application on the dev server applies the corresponding changes.

## Suggested Links

* [Basic Approaches for Building Applications]({% slug fewclicks_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
