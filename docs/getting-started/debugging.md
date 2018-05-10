---
title: Debugging
page_title: Debugging - Getting Started - Kendo UI Builder
description: "Testing and Debugging applications on your local environment with Kendo UI Builder."
slug: debugging_kuib
position: 4
---

# Debugging

Next step after designing your app is to test it on your local environment. You can make changes, debug and fix issues. And finally you can prepare a build in order to deploy your application.

## Actions (find more appropriate name)

You can access the available actions from both the **App Design** page and the toolbar that is available in each view.

* **Generate**&mdash;Generates the latest source code and outputs it in the project location in your file system.

* **Start**&mdash;Generates first then starts webpack dev server on http://localhost:`port` and opens web browser either in app root or in an url corresponding to the selected view.

> * `port` is first available **TCP port** between 4200 and 4300.
> * Webpack dev server is in watch mode, so any **Generate** action will trigger browser reload.

* **Stop**&mdash;Stops webpack dev server. It is only visible when dev server is already started.

* **Open in Browser**&mdash;Just opens web browser in a location same as in **Start** action. It is useful if you closed you werb browser but dev server is running.

* **Build**&mdash;Generates first then builds the app. Build output is `build_output/debug` or `build_output/release` local folder depending on what option you seleted. For more information, refer to the article on [bundling and packaging]({% slug bundlepackage_kuib %}).

> The Kendo UI builder provides options to create, develop, and bundle the application files in a pre-release state, but does not actually deploy the web project. Once the project files are built through the **Build** action and depending on issues you might encounter during the debugging or deployment process, you can either:
> * Deploy the `release` version in your desired environment, or
> * Deploy the `debug` version and debug the application directly in your desired environment.

// screen

## Suggested Links

* [Basic Approaches for Building Applications]({% slug fewclicks_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
