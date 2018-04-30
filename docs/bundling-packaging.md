---
title: Bundling & Packaging
page_title: Bundling & Packaging | Kendo UI Builder
description: "Bundle and package the generated applications when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: bundlepackage_kuib
position: 12
---

---
title: Debugging
page_title: Debugging | Kendo UI Builder
description: "Use the deployment options which are supported by the Kendo UI Builder and debug your project."
slug: debugging_kuib
position: 4
---

# Debug and Release Modes

The Builder provides the generate, open in browser, start, and build options which you can use for debugging the application while it is still in development and not yet released.

> You can access the options from both the **App Design** page and the toolbar that is available in each view.

dev frinedly, non-minimized


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




angJS we build with webpack
ang - with angular CLI

debug and release (prod) modes



## Suggested Links

* [Basic Approaches for Building Applications]({% slug fewclicks_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})




# Bundling and Packaging

Generate to generate the HTML and JavaScript source code for the app based on the latest edits. This also makes the app ready to run in preview mode (when you click Preview).
* Preview, which shows a preview of what the finished app looks like and how it behaves in the default web browser using a webpack-dev-server. Preview runs the latest generation of the web app. If the app has not yet been generated, or requires generation after editing in the Designer, this option automatically generates the app before previewing it.
* Publish, which generates a deployment image of the HTML and JavaScript source code for the app based on the latest edits, using one of the following deployment options that you choose:
* Debug: Test deployment on a web server.
* Release: Production deployment on a web server.

command line mode !! podavash mu deployment tool i toi go puska tam

## Suggested Links
