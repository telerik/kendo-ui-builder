---
title: Output Modes
page_title: Output Modes | Kendo UI Builder
description: "Use the deployment options which are supported by the Kendo UI Builder and debug your project."
slug: debugging_kuib
position: 4
---

# Output Modes

Depending on your current requirements, the Builder provides options for different output modes of the web application.

## Available Options

You can access the available options from both the **App Design** page and the toolbar that is available in each view.

* **Generate**&mdash;Generates the latest source code and outputs it in the project location in your file system.
* **Open in Browser**&mdash;Generates the project in its file system location and runs it on your local dev server.
* **Start**&mdash;Generates the latest source code, outputs it in the project location in your file system, and runs it on your local dev server.
* **Build**&mdash;Generates the latest source code and outputs the `build_output/debug` and `build_output/release` local folders. For more information, refer to the article on [bundling and packaging]({% slug bundlepackage_kuib %}).

> The Kendo UI builder provides options to create, develop, and bundle the application files in a pre-release state, but does not actually deploy the web project. Once the project files are built through the **Build** option and depending on issues you might encounter during the debugging or deployment process, you can either:
> * Deploy the `release` version in your desired environment, or
> * Copy the `debug` version and debug the application directly in your desired environment.

// screen

## Suggested Links

* [Basic Approaches for Building Applications]({% slug fewclicks_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
