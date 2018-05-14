---
title: Migration
page_title: Migration - Application Management - Kendo UI Builder
description: "Manually update the metadata versions of the application and the metadata versions that are supported by the Kendo UI Builder tool."
slug: migration_kuib
position: 3
---

# Migration

Migration is the process of matching the versions of the application metadata and of the metadata that are supported by the Builder.

For example, if your project uses the DataPicker component and it introduces a new `placeholder` property in its latest release, the Builder will compare and update the current metadata by adding the new property to the metadata of the application upon migration.

> The version of the Kendo UI Builder is not related to the metadata versions it supports.

The applications which need to be manually migrated have the **Migration Required** tag attached to their cards (or list items). To manually migrate an application and regardless of the view (**Cards** or **List**):

1. Go to the card (list item) of the project.
1. Click the **Settings** menu.
1. Select **Migrate**.

// screen of migration process?

## Suggested Links

* [Handling the Application State]({% slug app_state_kuib %})
* [Managing the Application]({% slug managingtheapp_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
