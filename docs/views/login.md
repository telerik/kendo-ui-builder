---
title: Login
page_title: Login - Views - Kendo UI Builder
description: "Learn how to use the system Login view which is provided by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: login_kuib
---

# Login View

The Login view is one of the system views which the [Application Module]({% slug appmodule_kuib %}) provides by default.

## Features

* Represents the layout of the page where the users submit their credentials and access the application according to their defined user roles. For more information, refer to the articles on [authentication, user roles, and authorization]({% slug authentication_kuib %}).
* Allows you to edit some of its properties. For more information on which properties are subject to modification, refer to the right-hand vertical toolbar (property grid) of the view.
* The Login view provides the Login Event Function. It is a function that runs when the user clicks the **Login** button (default: `onLogin`). You have to include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `login.view.component.ts` file for Angular which are located in the `\app\src\modules\application\login` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).
* Includes custom sections where you can add your own HTML. Each section is identified in the view design page with a placeholder containing descriptive text:
    * Custom top HTML section&mdash;Located in the area above **Header Title**.
    * Custom middle HTML section&mdash;Located in the area below **Header Title** and above **Username Label**.
    * Custom bottom HTML section&mdash;Located in the area below **Password Label**.

    For Angular, the Builder generates these files in the `\app\src\app\modules\[module-name]\[view-name]` folder. For AngularJS, the Builder generates these files in the `\app\src\modules\[module-name]\[view-name]` folder. Add your custom HTML code to the generated files and use the **Edit** option on each custom HTML section to edit the corresponding file from within the Builder.

## Preview

<img src="../../images/kuib-views-login.png" class="img-responsive" alt="Login View"/>

## Suggested Links

* [Views]({% slug viewsoverview_kuib %})
