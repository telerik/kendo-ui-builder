---
title: Status & Migration
page_title: Status & Migration | Kendo UI Builder
description: "Migrate existing applications to the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: migration_kuib
position: 10
---

# Status & Migration

The Builder provides options for migrating existing applications.

The version of the application metadata might not be supported by the Builder. The Builder automatically detects the version and as a result, the Dashboard applies the Incompatible or Migration required tag to the card of the project.   

The available tags are:

* **UpToDate**&mdash;The application was successfully migrated and does not require further actions.
* **Migration Required**&mdash;The versions of the application and of the Builder metadata differ, and the Builder is not able to automatically update the project metadata to the metadata formats that it supports.
* **Incompatible**
    * The Builder does not support the version of the application metadata because, due to a breaking change, a major difference in the metadata versions exists, or
    * The Builder cannot automatically migrate the project because the version of the metadata it supports is earlier than the version of the application metadata.
* **Unavailable**&mdash;Though the project metadata is present on the Dashboard, The project was removed from its location and only its metadata is still present on the Dashboard.  , therefore, the Builder is not able to load it. For more information, refer to the article on [migration]({% slug migration_kuib %}).


* **Migration Required**&mdash;The versions of the application and of the Builder metadata differ, and the Designer is not able to automatically update the project metadata to the metadata formats that are supported by the Builder. For more information, refer to the article on [migration]({% slug migration_kuib %}).
* **Incompatible**&mdash;Indicates that either due to a breaking change, a major difference in the metadata versions exists so that the Builder does not support such a version, or the version of the supported metadata by the Builder is earlier than the metadata version of the application, and the Builder cannot automatically migrate the project.


version of the builder is not related to the metadata version it supports


The versions of the application and of the Builder metadata differ,  and the Designer is not able to automatically update the project metadata to the metadata formats that are supported by the Builder.

    To handle this issue, either:
      * Manually migrate the application and its metadata, or
      * Recreate the project with the Builder.

    For more information, refer to the article on [migration]({% slug migration_kuib %}).

    * **Unavailable**&mdash;Though the project metadata is present on the Dashboard, the project was removed from its location and, therefore, the Builder is not able to load it.

        To handle this issue, either:
          * Manually migrate the application and its metadata, or
          * Recreate the project with the Builder.

## Suggested Links
