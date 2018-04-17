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

## Managing Existing Projects

Once you create or import an application, the Dashboard displays a card for the project. If you already have projects from previous releases or import external applications, and launch the Designer, the Dashboard attempts to import these projects. Depending on the status of each project, the Dashboard adds a tag to the card which indicates what further actions are required for the successful integration of the project.

* **UpToDate** indicates that the application was successfully imported and does not require further actions.
* **Migration Required** indicates that the versions of the application and of the Builder metadata differ, and that the Designer is not able to automatically handle the migration to the metadata format of the Builder. For more information, refer to the article on [migration]({% slug migration_kuib %}).
* **Incompatible** indicates that the versions of the application and of the Builder metadata differ. While the Builder detects this issue, it does not automatically handle the migration to the metadata format of the Builder. To handle this issue, either manually migrate the application and its metadata, or recreate the project with the Builder. For more information, refer to the article on [migration]().
* **Unavailable** indicates that due to an unspecified reason, the Designer is not able to load the application metadata. To handle this issue, either:
    * Manually migrate the application and its metadata, or
    * Recreate the project with the Builder.

<!-- screen -->

To handle the respective state of a project, use the **Gear** options. The **Gear** icon provides options to duplicate, migrate, remove, or delete an existing application.

<!-- screen -->

To display the log messages when you debug or troubleshoot a problem, use the **Output** bar.

<!-- screen -->

## Suggested Links

* [Getting Started with the Kendo UI Builder]({% slug getstarted_kuib %})
* [Getting Started with the Kendo UI Designer]({% slug getstarted_kdesigner %})
