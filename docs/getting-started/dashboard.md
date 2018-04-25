---
title: Dashboard
page_title: Dashboard | Kendo UI Builder
description: "Manage the state of your existing applications in the Kendo UI Designer by using the options of its Dashboard."
slug: dashboard_kuib
position: 2
---

# Dashboard

When you open the Builder, it loads the initial Dashboard page.

The Dashboard is the user interface that assists you when you create the application and handle its settings. The Dashboard page maintains the **Cards** and **List** views from where you can access the projects in the Builder.

// screen of card and list views in one

## Initial Load

When you load the Builder for the first time and you have no current projects yet, the Dashboard provides the **Create App** option for creating a new project and the **Import App** option for importing existing projects. For more information on creating and importing applications, and managing their modules and data providers, refer to the article on [designing the application]({% slug designingtheapp_kuib %}#toc-applications-settings).

// screen on initial load view

## Cards and Tags

Once you create or import an application, the Dashboard displays a status card in the **Cards** view and a list item in the **List** view for the project.

When you already have projects in the Builder from previous releases or if you import external applications, the tool compares the versions of the application metadata and the metadata that is supported by the Builder, and tries to update to the latest available versions. If due to a reason the Builder was not able to successfully proceed with the migration, it renders a tag in the application card (or list item) which reflects the status of the project and indicates what further actions are needed. For more information, refer to the documentation on [handling the status tags]({% slug statustags_kuib %}) and [migration]({% slug migration_kuib %}).

// screen of tags

## Log Messages

The **OUTPUT** bar displays the log messages which are intended to facilitate the debugging and troubleshooting processes. For more information, refer to the articles on [debugging]({% slug debugging_kuib %}) and [troubleshooting]({% slug troubleshooting_kuib %}).

// screen

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
* [Debugging the Application]({% slug debugging_kuib %})
* [Basic Approaches for Building Applications]({% slug fewclicks_kuib %})
* [Handling the Status Tags]({% slug statustags_kuib %})
* [Migration]({% slug migration_kuib %})
