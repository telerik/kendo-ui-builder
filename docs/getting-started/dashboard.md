---
title: Dashboard
page_title: Dashboard | Kendo UI Builder
description: "Manage the state of your existing applications in the Kendo UI Designer by using the options of its Dashboard."
slug: dashboard_kuib
position: 3
---

# Kendo UI Builder Dashboard

The Dashboard of the Kendo UI Builder stores the cards of all your previously created, imported, and migrated projects ?? and is part of the Kendo UI Designer.

## Initial Load

When you load the Designer for the first time and you have no current projects yet, the Dashboard renders only the UI with the selectable options to create or import an application.

<!-- screen -->

## Basic Functionalities

The Dashboard provides basic UI options which enable you to access information about the status of your projects.  

### Cards and Tags

Once you create or import an application, the Dashboard displays a card for the project. If you already have projects from previous releases or import external applications, the Dashboard attempts to import these projects when you launch it. As a result and depending on the status of each project, the Dashboard adds a tag to the project card. These tags indicate the further actions you are required to take for the successful integration of the project.

The available tags are:

* **UpToDate**&mdash;The application was successfully imported and does not require further actions.
* **Migration Required**&mdash;The versions of the application and of the Builder metadata differ, and the Designer is not able to automatically update the project metadata to the metadata formats that are supported by the Builder. For more information, refer to the article on [migration]({% slug migration_kuib %}).
* **Incompatible**&mdash;The versions of the application and of the Builder metadata differ,  and the Designer is not able to automatically update the project metadata to the metadata formats that are supported by the Builder.

    To handle this issue, either:
      * Manually migrate the application and its metadata, or
      * Recreate the project with the Builder.

    For more information, refer to the article on [migration]({% slug migration_kuib %}).

* **Unavailable**&mdash;Due to unspecified reasons, the Designer is not able to load the project metadata.

    To handle this issue, either:
      * Manually migrate the application and its metadata, or
      * Recreate the project with the Builder.

<!-- screen -->

### Status Options

To handle the status of a project, use the **Gear** options. The **Gear** icon provides options to duplicate, migrate, remove, or delete an existing application. For more information, refer to the section on the [application status and migration]({% slug migration_kuib %}).

<!-- screen -->

### Log Messages

To display the log messages when you debug or troubleshoot a problem, use the **Output** bar.

<!-- screen -->

## Suggested Links

* [Getting Started with the Kendo UI Builder]({% slug getstarted_kuib %})
* [Getting Started with the Kendo UI Designer]({% slug getstarted_kdesigner %})
