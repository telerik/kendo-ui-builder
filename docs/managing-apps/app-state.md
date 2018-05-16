---
title: Handling the Application State
page_title: Handling the Application State - Application Management - Kendo UI Builder
description: "Handle the state labels of your application when working with the Kendo UI Builder tool."
slug: app_state_kuib
position: 1
---

# Handling the Application State

Application state labels indicate whether a specific application has issues which make it impossible for you to continue working with it.

If such issues occur, the Builder does not automatically resolves them. Depending on the types of issue, the user can either explicitly trigger the fix or manually handle the issue.

The available application state labels are:

* No label&mdash;The application has no issues.
* **Migration Required**&mdash;The versions of the application metadata and the metadata supported by the Kendo UI Builder differ, and a [migration]({% slug migration_kuib %}) to the latest metadata format is possible.
* **Incompatible**&mdash;Either the Builder does not support the version of the application metadata due to a breaking change, or the version of the metadata the Builder supports is earlier than the version of the application metadata.

    To handle the **Incompatible** application state, manually migrate the application. For more information, refer to the article on [migration]({% slug migration_kuib %}).

* **Unavailable**&mdash;The Builder works with the metadata of the application and, based on it, generates all other application files. That is why if the metadata of the application is removed from its file system location, the application card (or list item) on the Dashboard becomes inactive and renders the **Unavailable** label.

    To handle the **Unavailable** application state you can do one of the following:

    * Try to recover the missing files.
    * Remove the application card (or list item) from the Dashboard.

## Suggested Links

* [Managing Application Options]({% slug managingtheapp_kuib %})
* [Migration]({% slug migration_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
