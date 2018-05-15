---
title: Managing Options  
page_title: Managing Options - Application Management - Kendo UI Builder
description: "Use the options for managing your application and duplicate, export, remove, or delete it when working with the Kendo UI Builder tool."
slug: managingtheapp_kuib
position: 2
---

# Managing Options

You can use the **Settings** menu on the application card (or list item) and apply the following options to your projects:

* **Duplicate**&mdash;Copies the whole application, including its metadata and artifacts, and duplicates the project on both the **Cards** and **List** views and in your file system.
* **Export**&mdash;Archives in a `.zip` format and exports all application files, excluding the `node_modules` folder. The **Export** option is convenient, for example, when you need to send your project to the Support Team for investigating an issue.

    To export an application:

    1. Click **Export**. As a result, the dialog box for setting the location appears.
    2. Select a location for the exported `.zip` folder and click **Save**.

* **Reveal**&mdash;Opens the file system location of the project.
* **Remove**&mdash;Removes the application from the **Cards** and **List** views, but the application files remain in your file system and can be imported.
* **Delete**&mdash;Permanently removes the application from both the **Cards** or **List** view and from your file system, and the application cannot be restored.

Applications which need to be migrated expose the **Migrate** option in addition to the regular set of managing options. When you click **Migrate**, the Builder updates the metadata versions and removes the label from the card (or list item).

Applications which are **Unavailable** expose only the **Remove** option.

## Searching

The Builder enables you to search for a project on the Dashboard by entering your input in the **Search** field. As a result, the names of all applications that are present on the Dashboard are filtered and the matching results displayed. The **Search** options works in both the **Cards** and **List** views.  

## Sorting

The Builder enables you to sort the applications by name or framework, as well as to clear all sorting criteria. To apply sorting on the **Cards** view, use the **Sort** drop-down menu. To apply sorting on the **List** view, click on the respective grid header.

## Suggested Links

* [Handling the Application State]({% slug app_state_kuib %})
* [Migration]({% slug migration_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
