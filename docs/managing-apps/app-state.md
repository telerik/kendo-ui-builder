---
title: Handling the Application State
page_title: Handling the Application State - Application Management - Kendo UI Builder
description: "Handle the application state labels of your application when working with the Kendo UI Builder tool."
slug: app_state_kuib
position: 1
---

# Handling the Application State

Aplication State Labels are intended to indicate if there are issues with your application, which make it impossible for you to work with it.

Kendo UI Builder does not try to resolve issues automatically. It can be explicitly triggered by the user if it is possible. Otherwise, user could do it manually.

The available application state labels are:

* No label&mdash;There are no issues eith the application.
* **Migration Required**&mdash;The versions of the application metadata and the metadata supported by the Kendo UI Builder differ, and migration to the latest metadata format is possible. For more information, refer to the article on [migration]({% slug migration_kuib %}).
* **Incompatible**&mdash;Either the Builder does not support the version of the application metadata due to a breaking change, or the version of the metadata the Builder supports is earlier than the version of the application metadata.

    To handle the **Incompatible** application status, manually migrate the application. For more information, refer to the article on [migration]({% slug migration_kuib %}).

* **Unavailable**&mdash;The Builder works with the metadata of the application and, based on it, generates all other application files. That is why if the metadata of the application is removed from its file system location, the application card (or list item) on the Dashboard becomes inactive and renders the **Unavailable** label.

    To handle the **Unavailable** application status you can do one of the following:

    * Try to recover missing files.
    * Remove the application card (or list item) from the Dashboard.

## Suggested Links

* [Managing the Application]({% slug managingtheapp_kuib %})
* [Migration]({% slug migration_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
