---
title: Unauthorized
page_title: Unauthorized - Views - Kendo UI Builder
description: "Learn how to use the system Unauthorized view which is provided by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: unauthorized_kuib
---

# Unauthorized View

The Unauthorized view is one of the system views which the [Application Module]({% slug appmodule_kuib %}) provides by default.

## Features

* Represents the layout of the page that loads when users try to access any content that is outside their defined access rights. For more information, refer to the articles on [authentication, user roles, and authorization]({% slug authentication_kuib %}).
* Allows you to set and edit its basic functionalities. For more information on which properties are subject to modification, refer to the right-hand vertical toolbar (property grid) of the view.
* Includes custom sections where you can add your own HTML. Each section is identified in the view design page by a placeholder containing descriptive text:
    * Custom top HTML section&mdash;Located in the area above the **Title** text.
    * Custom bottom HTML section&mdash;Located in the area below the **Custom HTML** text.

    For Angular, the Builder generates these files in the `app\src\app\modules\application\unauthorized-page` folder. For AngularJS, the Builder generates these files in the `app\src\modules\application\unauthorized-page` folder. Add your custom HTML code to the generated files and use the **Edit** option on each custom HTML section to edit the corresponding file from within the Builder.

## Preview

<img src="../../images/kuib-views-unauthorized.png" class="img-responsive" alt="Unauthorized View"/>

## Suggested Links

* [Views]({% slug viewsoverview_kuib %})
