---
title: Dashboard
page_title: Dashboard | Kendo UI Builder
description: "Manage the state of your existing applications in the Kendo UI Designer by using the options of its Dashboard."
slug: dashboard_kuib
position: 2
---

# Dashboard

The Dashboard of the Kendo UI Builder stores the cards of all your previously created, imported, and migrated projects.

## Initial Load

When you load the Builder for the first time and you have no current projects yet, the Dashboard renders only the UI with the selectable options to create or import an application.

<!-- screen -->

## Basic Functionalities

The Dashboard provides basic UI options which enable you to access information about the status of your projects.  

### Cards and Tags

Once you create or import an application, the Dashboard displays a card for the project and stores it for future references. If you already have projects from previous releases or if you import external applications, the Dashboard attempts to import these projects by handling matching the versions of the application metadata and the versions of the metadata which the Builder supports. Depending on the outcome of this match, the Dashboard adds a tag to the card of each project which reflects the current status of the project. For more information, refer to the article on [migration]({% slug migration_kuib %}).

// screen

### Log Messages

The **Output** bar displays the log messages which are intended to facilitate the debugging or troubleshooting processes.

// screen

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Designing the Application]({% slug designingtheapp_kuib %})
* [Debugging and Releasing]({% slug debugging_kuib %})
* [Managing the Application Status and Migration]({% slug migration_kuib %})
