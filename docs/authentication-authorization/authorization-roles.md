---
title: Authorization and Roles
page_title: Authorization and Roles - Authentication & Authorization - Kendo UI Builder
description: "Set and authorize the user roles when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: rolesauthoriz_kuib
position: 2
---

# Authorization and Roles

The Builder supports role based authorization.

Authorization allows you to define specific user roles and set access rights to its modules, views, and components.

## Overview

To implement a role based authorization:

1. Define a list of user roles that will be supported by the application.
1. Get the user roles after user authentication. You need to write custom code that is specific to your backend.
1. Set the access rights for the different parts of the application&mdash;for example, modules, views, and so on.

> Defining user roles and setting access rights hides parts of the user interface. Make sure that the data service does not send any data over the wire for which the user is not authorized to see.

## Defining User Roles

1. On the **App Design** page, click the **Settings** icon.
1. Select **Roles** to open the **Authorization Roles** dialog box.
1. Define a user role.
1. Click **Add Role** to add the user role to the list below.
1. Click **Save** to save or **Cancel** to discard your changes.

## Setting Access Rights

The Builder supports the following levels of access rights:

* Module&mdash;At the module level, provide a subset of roles that are defined at the application level. The module is accessible only to users with the respective roles.
* View&mdash;At the view level, provide a subset of roles that are defined at the module level. The view is accessible only to users with the respective roles.
* Individual components (blank view row and column only)&mdash;At the component level, provide a subset of roles that are defined for the Blank view. The row or column is accessible only to users with the respective roles.

## Suggested Links

* [Authentication]({% slug authentication_kuib %})
