---
title: Bundling & Packaging
page_title: Bundling & Packaging - Documentation - Kendo UI Builder
description: "Bundle and package the generated applications when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: bundlepackage_kuib
position: 12
---

# Bundling and Packaging

The Builder provides options to build your web application in debug or release (production) configuration by using the **Build** button.

**Build** allows you to:
* Choose the desired build configuration
* (Optional) Set the **Base href** property

The button is available on both the **App Design** page and the toolbar of each view.

<img src="../images/kuib-build-configurations.png" class="img-responsive" alt="Kendo UI Builder Build Configurations"/>

## Choosing the Build Configuration

When you click **Build**, the button generates the latest source code of the application and then, depending on the selected configuration, builds the deployment bundle in the `build_output/debug` or `build_output/release` local folders. To deploy your application, copy the contents of the deployment bundle to a web server.

> The debug version of the deployment bundle contains development-friendly code in a non-minimized format.

## Setting the Base href Property

If you host your application in a sub-folder of your web server, you have to set the **Base href** property to the name of that sub-folder. For example, if `index.html` is on the server at `/my/app/index.html`, set **base href** to `/my/app/`. If you copy the project to the root directory of the server, omit this step and disregard the **Base href** setting.

## Suggested Links

* [Frameworks]({% slug frameworks_kuib %})
* [Troubleshooting]({% slug troubleshooting_kuib %})
