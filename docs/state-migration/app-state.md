---
title: Handling the Status Tags
page_title: Handling the Status Tags - Status & Migration - Kendo UI Builder
description: "Handle the status tags of your application when working with the Kendo UI Builder tool."
slug: app_state_kuib
position: 1
---

# Handling the Status Tags

If the Builder is not able to automatically match the metadata versions, it displays a status tag.

When the versions of the application metadata and the metadata that the Builder supports differ, the Builder tries to automatically match the two versions by updating to the later one. If the update is not successful, the Builder adds the status tags which hint at the further actions that are needed.

The available status tags are:

* No Tag&mdash;The application is successfully migrated and is up to date. No further actions are required.
* **Migration Required**&mdash;The versions of the application metadata and the metadata supported by the Builder differ, and the Builder was not able to automatically migrate the project. For more information, refer to the article on [migration]({% slug migration_kuib %}).
* **Incompatible**&mdash;Either the Builder does not support the version of the application metadata due to a breaking change, or the version of the metadata the Builder supports is earlier than the version of the application metadata.

    To handle the **Incompatible** application status, manually migrate the application. For more information, refer to the article on [migration]({% slug migration_kuib %}).

* **Unavailable**&mdash;The Builder works with the metadata of the application and, based on it, generates all other application files. That is why if the metadata of the application is removed from its file system location, the application card (or list item) on the Dashboard becomes inactive and renders the **Unavailable** tag.

    To handle the **Unavailable** application status:

    1. Remove all application files from the file system location.
    2. Remove the application card (or list item) from the Dashboard.
    3. Create the application again.

## Suggested Links

* [Managing the Applications]({% slug managingtheapp_kuib %})
* [Migration]({% slug migration_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
