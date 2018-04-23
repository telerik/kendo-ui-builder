---
title: Status & Migration
page_title: Status & Migration | Kendo UI Builder
description: "Migrate existing applications to the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: migration_kuib
position: 10
---

# Status & Migration

You can migrate existing and imported applications to the Builder.

// what's migration?

If you try to import an existing application, the Builder attempts to migrate it and include it for further development. As a result, the Dashboard applies a status tag to the corresponding project card which indicates whether and what further actions are needed for the successful integration of the project.

## Statuses

The available status tags are:

* **UpToDate**&mdash;The application was successfully migrated and does not require further actions.
* **Migration Required**&mdash;The versions of the application and of the Builder metadata differ, and the Builder is not able to automatically update the project metadata to the metadata formats that it supports.
* **Incompatible**
    * The Builder does not support the version of the application metadata because, due to a breaking change, a major difference in the metadata versions exists, or
    * The Builder cannot automatically migrate the project because the version of the metadata it supports is earlier than the version of the application metadata.
* **Unavailable**&mdash;Though the project metadata is present on the Dashboard, The project was removed from its location and only its metadata is still present on the Dashboard.  , therefore, the Builder is not able to load it.

> The version of the Builder is not related to the metadata versions it supports.

## Handling Migration Issues

If the metadata versions of the application and of the Builder differ or if the project was previously deleted from its location but its metadata is still present on the Dashboard, either:
* Manually migrate the application and its metadata, or
* Recreate the project with the Builder.

## Suggested Links

* [Dashboard]({% slug dashboard_kuib %})
