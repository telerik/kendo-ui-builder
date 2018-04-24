---
title: Status & Migration
page_title: Status & Migration | Kendo UI Builder
description: "Migrate existing applications to the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: migration_kuib
position: 10
---

# Application Statuses & Migration

You can migrate existing and imported applications to the Builder.

Migration is the process of matching the versions of the application metadata and the metadata version that KUIB supports. For example, if the DataPicker introduces a new `placeholder` property and your application uses the component, upon migration the Builder compares and updates the current metadata by adding the new property to the metadata of the application.

If you try to import an existing application, the Builder attempts to migrate it and include it for further development. As a result, the Dashboard applies a status tag to the corresponding project card which indicates whether and what further actions are needed for the successful integration of the project.

## Migrating Applications

1. On the Dashboard, in the Cards view, the applications that need migrations are marked with the Migraton needed tag.
1. In the List view of the Builder, the row of the application that needs migration is also highlighted.
1. From **Settings** menu, click the icon, a Migrate option appears. Click on it.
1. As a result, a popup notification appears that the migration has been successful.

## Application Statuses

Depending on the status, options are different.

Sorting apps
drop down menu
order in asc or desc alpajhavbetical and by framework order and clear sorting - the order of the app addition.  

Sorting can be applied from the list view from the ddl with options and by clicking each header of the list view grid.

Search option - input and filters the apps by name. works in both views cards and list  

The available status tags are:

* No tag&mdash;The application is up to date and was successfully migrated and does not require further actions.
* **Migration Required**&mdash;The versions of the application and of the Builder metadata differ, and the Builder is not able to automatically update the project metadata to the metadata formats that it supports.
* **Incompatible**
    * The Builder does not support the version of the application metadata because, due to a breaking change, a major difference in the metadata versions exists, or
    * The Builder cannot automatically migrate the project because the version of the metadata it supports is earlier than the version of the application metadata.
* **Unavailable**&mdash;The list/card item is still present but the application metadata has been removed from its location. List view is inactive too. The Builder works with metadata, and generates the other files from it. Only if the metadata is deleted, the app becomes unavaialbe. Remove all app files, the remove te card list item and re-create the app again.   

Though the project metadata is present on the Dashboard, The project was removed from its location and only its metadata is still present on the Dashboard.  , therefore, the Builder is not able to load it.

> The version of the Builder is not related to the metadata versions it supports.

Remove - removing it from the app list/card of the Builder but remains in the file system of the PC and can be imported later on.
Delete - permanently removes the app from both the file location system and the Builder and cannot be restored
Duplicate - copies the whole app - metadata plus artifacts - duplicates on both places. All app statuses have this option without the Unavaialbe
Export - does not include the `node_modules` folder in the archive and archives it in .zip format. select the location, click save. As a result, a popup notification for success appears. Feature is for support purposes when a project needs to be sent, for an easier processing.
Reveal - opens the project location in the file system of the PC.



## Handling Migration Issues

If the metadata versions of the application and of the Builder differ or if the project was previously deleted from its location but its metadata is still present on the Dashboard, either:
* Manually migrate the application and its metadata, or
* Recreate the project with the Builder.

## Suggested Links

* [Dashboard]({% slug dashboard_kuib %})
