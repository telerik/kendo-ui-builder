---
title: Migration
page_title: Migration - Application Management - Kendo UI Builder
description: "Manually update the metadata versions of the application and the metadata versions that are supported by the Kendo UI Builder tool."
slug: migration_kuib
position: 3
---

# Migration

Migration is the process of updating application metadata to the latest format which is supported by Kendo UI Builder.

Application metadata has its own version which communicates to the Builder whether its format is compatible or not. If the application metadata is in an incompatible format, you have to migrate the application metadata to the latest possible format.

If the Builder did not introduce breaking changes in the metadata, it is possible to automatically migrate the application metadata. When the automatic migration is possible, the Builder marks the application with the **Migration Required** state label.

To migrate the application, use either of the following available options:

* Open the application for editing. A dialog box appears and prompts you to migrate the application before editing.
* Click the **Settings** menu and select **Migrate**.

If an application was created a long time ago, its metadata cannot be automatically migrated and the Builder marks such applications with the **Incompatible** state label. To edit such applications, you have to manually convert the metadata in a compatible format by directly editing the metadata files.

> * The version of the Kendo UI Builder is not related to the metadata versions it supports.
> * The migration process does not analyze and convert custom application code that is not compatible with the auto-generated application code.

## Suggested Links

* [Handling the Application State]({% slug app_state_kuib %})
* [Managing the Application]({% slug managingtheapp_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
