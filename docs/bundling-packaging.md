---
title: Bundling & Packaging
page_title: Bundling & Packaging - Documentation - Kendo UI Builder
description: "Bundle and package the generated applications when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: bundlepackage_kuib
position: 12
---

# Bundling and Packaging

The Builder provides options to build your web application in debug or release (production) configuration.

## Overview

The **Build** button is available on both the **App Design** page and the toolbar of each view. When clicked, it will allow you to choose the build configuration you would like to build and optionally set the **base href** property.

<img src="../images/kuib-build-configurations.png" class="img-responsive" alt="Kendo UI Builder Build Configurations"/>

When you click **Build** it generates the latest source code of the application and then builds the deployment bundle in `build_output/debug` or `build_output/release` local folders depending on the selected configuration. To deploy your application just copy the contents of the deployment bundle to a web server.

>The debug version of the deployment bundle contains development-friendly code in a non-minimized format. 

## Base Href

If you host your application in a *sub-folder* of your web server you should set the **base href** property to be the name of the *sub-folder*. For example, if `index.html` is on the server at `/my/app/index.html`, set the base href to `/my/app/`. If you copy to the server's root directory, omit this step and leave the *base href* alone.

## Suggested Links

* [Frameworks]({% slug frameworks_kuib %})
* [Troubleshooting]({% slug troubleshooting_kuib %})
