---
title: Dashboard
page_title: Dashboard | Kendo UI Builder
description: "Manage the state of your existing applications in the Kendo UI Designer by using the options of its Dashboard."
slug: dashboard_kuib
position: 2
---

# Dashboard

When you start the Builder, its initial Dashboard page appears.

The Dashboard is the user interface that assists you when creating the application and setting its properties. The Dashboard page maintains **Cards** and **List** views which store your Builder projects.

## Initial Load

When you load the Builder for the first time and you have no current projects yet, the Dashboard provides options to create or import an application. For more information on creating new projects, refer to the article on [designing the application]({% slug designingtheapp_kuib %}#toc-applications-settings).

// screen

## Cards and Tags

Once you create or import an application, the Dashboard displays a status card in the **Cards** view and a list item in the **List** view for the project.

If you already have projects from previous releases or if you import external applications, the Builder compares the versions of the application metadata and of the metadata which the Builder supports. If the Builder detects differences between the metadata versions and cannot automatically match them, the Dashboard renders a tag per card which reflects the status of the project and indicates the further actions that are needed. For more information, refer to the documentation on [applications statuses]({% slug status_kuib %}) and [migration]({% slug migration_kuib %}).

// screen

## Log Messages

The **OUTPUT** bar displays the log messages which are intended to facilitate the debugging and troubleshooting processes. For more information, refer to the articles on [debugging]({% slug debugging_kuib %}) and [troubleshooting]({% slug troubleshooting_kuib %}).

// screen

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
* [Debugging and Releasing]({% slug debugging_kuib %})
* [Basic Approaches for Building Applications]({% slug fewclicks_kuib %})
* [Managing the Application Status and Migration]({% slug migration_kuib %})
