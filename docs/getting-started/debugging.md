---
title: Debugging
page_title: Debugging - Getting Started - Kendo UI Builder
description: "Test and debug the applications on your local environment with the Kendo UI Builder."
slug: debugging_kuib
position: 3
---

# Debugging

After you design the application, you need to test it on your local environment.

The Builder enables you to make changes, debug, and fix issues, and to prepare a build to deploy the web project.

## Available Options

You can access the available debugging options from both the **App Design** page and the toolbar that is available in each view.

* **Generate**&mdash;Generates the latest source code and outputs it in the project location in your file system.
* **Start**&mdash;Triggers the generation of the application, starts the Webpack dev server on `http://localhost:port`, and opens your default web browser either in the root of the application or in a URL which corresponds to the selected view.

    > * The available port is a TCP port with a range between 4200 and 4300.
    > * The Webpack dev server is in watch mode. This means that each **Generate** command causes the reloading of the browser.

* **Stop**&mdash;Stops the Webpack dev server. **Stop** becomes visible only after the dev server is started.
* **Open in Browser**&mdash;Opens the web browser in the same location as the **Start** action. **Open in Browser** is useful in the cases when you closed the web browser while the dev server is still running.
* **Build**&mdash;Generates and then builds the application. The build output is generated in a `build_output/debug` or `build_output/release` local folder depending on the debug or release option you previously selected. For more information, refer to the article on [bundling and packaging]({% slug bundlepackage_kuib %}).

    > The debugging options of the Builder bundle the application files in a pre-release state, but do not actually deploy the web project. Once the project files are compiled through **Build** and depending on the possible issues you might encounter during the debugging or deployment process, you can either:
    > * Deploy the `release` version on your desired environment, or
    > * Deploy the `debug` version and debug the application directly on your desired environment.

// screen

## Suggested Links

* [Dashboard]({% slug dashboard_kuib %})
* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
