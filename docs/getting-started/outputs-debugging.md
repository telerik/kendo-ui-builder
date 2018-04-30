---
title: Outputs and Debugging
page_title: Outputs and Debugging - Getting Started - Kendo UI Builder
description: "Use the output application modes and access the debugging options provided by the Kendo UI Builder."
slug: debugging_kuib
position: 4
---

# Outputs and Debugging

Depending on your current requirements, the Builder provides options for different output modes of the web application.

## Output Modes

You can access the available options from both the **App Design** page and the toolbar that is available in each view.

* **Generate**&mdash;Generates the latest source code and outputs it in the project location in your file system.
* **Open in Browser**&mdash;Generates the project in its file system location and runs it on your local dev server.
* **Start**&mdash;Generates the latest source code, outputs it in the project location in your file system, and runs it on your local dev server.
* **Build**&mdash;Generates the latest source code and outputs the `build_output/debug` and `build_output/release` local folders. For more information, refer to the article on [bundling and packaging]({% slug bundlepackage_kuib %}).

> The Kendo UI builder provides options to create, develop, and bundle the application files in a pre-release state, but does not actually deploy the web project. Once the project files are built through the **Build** option and depending on issues you might encounter during the debugging or deployment process, you can either:
> * Deploy the `release` version in your desired environment, or
> * Copy the `debug` version and debug the application directly in your desired environment.

// screen

## Debugging Options

You can locate possible problems, investigate them accordingly, and debug your web project by using the available debugging options.

To debug your web application before it is published:

* The `KUIBLog.log` file&mdash;The `KUIBLog.log` file stores all detected application errors and is generated every time the application is generated through the **Generate** output option. To debug the project, open `KUIBLog.log` and look into its output.

    On Windows, `KUIBLog.log` is located in `C:\Users\[username]\AppData\Roaming\KendoUIBuilder\KUIBLog.log`.
    On MacOS, `KUIBLog.log` is located in ...

* Popup notifications&mdashh;The Builder renders popup notifications for the successful and unsuccessful fulfilment of commands that were submitted through its UI. For example, if the Builder was not able to load a data provider or render a custom template, it will display a popup notification for the unsuccessful operation.   
* The **>_ OUTPUT** bar&mdash;**>_ OUTPUT** displays the log messages of the application. The logger is located at the bottom of each Builder page.
* The **Toggle Developer Tools** option&mdash;**Toggle Developer Tools** simulates debugging in the browser. To open the console log window, go to the Builder toolbar and select **Help** > **Toggle Developer Tools**.

To debug your web project after it is published, open the browser console by pressing `F12` > **Console**, or by right-clicking the desired web page and selecting **Inspect Element** > **Console**.

## Suggested Links

* [Basic Approaches for Building Applications]({% slug fewclicks_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
