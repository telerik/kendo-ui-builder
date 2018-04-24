---
title: Debugging
page_title: Debugging | Kendo UI Builder
description: "Use the deployment options which are supported by the Kendo UI Builder and debug your project."
slug: debugging_kuib
position: 5
---

# Debugging the Application

The Builder provides options for debugging the application while you are still developing it and the project is not yet ready to be released.

The following options (generate, open in browser, start, and build) can be accessed both from the **App Design** page and from the toolbar that is available in each view.

// screen

* **Generate**&mdash;Generates the latest source code and outputs it in the local ... folder.
* **Open in Browser**&mdash;Starts the local dev server that renders the generated code in the local folder.
* **Start**&mdash;Triggers the Watch mode of the Builder. As a result, the Builder generates the latest code, outputs it in the local ... folder, and starts the local dev server that renders the generated code in the local folder.
* **Build**&mdash;Generates the latest source code and outputs the `build_output/debug` and `build_output/release` local folders. For more information refer to the article on [bundling and packaging]({% slug bundlepackage_kuib %}).

> The Kendo UI builder provides options to create, develop, and bundle the application files in a pre-release state, but does not actually deploy the web project. Once the project files are built by using the **Build** option and depending on issues you might encounter during the debugging or deployment process, you can either:
> * Take the release version and deploy it in your desired environment, or
> * Take the debug version and debug the application directly in your desired environment.

To debug your project:

1. Click **Start** > **Open in Browser** to locally review the application in your default browser.
1. Access the Builder files and edit them.
1. On the Toolbar, click **Generate**. As a result, the generated code gets updated, the browser is refreshed, and the application on the dev server applies the corresponding changes.

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
