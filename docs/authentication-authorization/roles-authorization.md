---
title: Authorization and Roles
page_title: Authorization and Roles - Authentication & Authorization - Kendo UI Builder
description: "Set and authorize the user roles when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: rolesauthoriz_kuib
position: 2
---

# Authorization and Roles

Kendo UI Builder supports role based authorization. It allows you to define specific user roles and set access rights to its modules, views, and components.

## Overview

In order to implement role based authorization in your application you need to:

* Define list of user roles that will be supported in the application.
* Get user roles after user authentication. It requires writing custom code specific to your backend.
* Set the access rights for the parts of your application, e. g. modules, views etc.

> Defining user roles and setting access rights hides parts of the user interface. As a result, make sure that the Data Service does not send any data over the wire for which the user is not authorized to see.

## Defining User Roles

1. In the app design page, click the gear icon next to the app name and select Roles.
2. Select **Roles** to open the **Authorization Roles** dialog box.
3. In **Roles**, define a user role.
4. Click **Add Role** to add the user role to the list below.
5. Click **Save** to save or **Cancel** to discard your changes.


## Setting the Access Rights

Kendo UI Builder supports three levels of access rights: module, view and individual components (blank view row and column only).

* At Module level: Must be a subset of roles that are defined at the app level. Only those users that have these roles can access the module.
* At View level: Must be a subset of roles that are defined at the module level. Only those users that have these roles can access the view.
* At Component level: Must be a subset of roles that are defined for the Blank view. Only those users that have these roles can view the row or column.

## Suggested Links
