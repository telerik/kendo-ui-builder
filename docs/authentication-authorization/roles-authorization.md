---
title: Roles and Authorization
page_title: Roles and Authorization - Setup & Migration - Kendo UI Builder
description: "Set and authorize the admin roles when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: rolesauthoriz_kuib
position: 1
---

# Authorization and Roles

The Builder allows you to define specific roles to the application and set access rights to its modules and views, and to the rows and columns of the Blank view.

> Defining user roles and setting access rights hides parts of the user interface. As a result, make sure that the Data Service does not send any data over the wire for which the user is not authorized to see.

* A Data Provider which has its form or basic authentication configured.
* A custom Business Entity which returns user roles on a service. The service has to be deployed on a Progress Application Server instance in the backend.

You need to set the user roles at different levels in the application, map the roles with the user  and write custom code to invoke the custom Business Entity. The Builder will then use the login procedure of the user to send the list of the available roles and will count on the server to match the valid roles with the particular user. The user login procedure at runtime invokes a corresponding method in the Business Entity and, upon authentication, that method returns the roles of the user and informs the Builder gets informed about the access rights of the user. All user roles must be defined in the backend if the custom Business Entity.


 Kendo UI Builder then uses this role information to determine the user's access rights to modules, views, etc. The mapping of user roles must be defined in the custom Business Entity in the backend.
Defining roles in Kendo UI Designer
You can define roles at four levels of inheritance:
*At the app level: All users that require access to protected parts of the app must have a role defined at the app level.
*At the module level: Must be a subset of roles that are defined at the app level. Only those users that have these roles can access the module.
*At the view level: Must be a subset of roles that are defined at the module level. Only those users that have these roles can access the view.
*For Blank views only, at the row or column level: Must be a subset of roles that are defined for the Blank view. Only those users that have these roles can access the row or column.
Defining roles at the app level
You must define the names of all roles that require access to protected parts of the app as follows:
1. In the app design page, click the gear icon next to the app name and select Roles.



## Defining the Roles


## Setting the Access Rights


## Suggested Links
