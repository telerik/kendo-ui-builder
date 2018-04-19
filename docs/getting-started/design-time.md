---
title: Designing
page_title: Designing | Kendo UI Builder
description: "Create your web application and manage its root level operation from the App Design page which is provided by the Kendo UI Builder."
slug: designingtheapp_kuib
position: 3
---

# Designing the Application

The **App Design** page provides options to define and update the properties of the application and to set up its design by enabling you to add and edit its modules and data providers.  

## Creating Applications

To create an application:

1. On the Dashboard, select the **Create App** option. As a result, the **Create App** page opens.
1. On the **Create App** page, select the framework by clicking on it (**Target Framework**).
1. Provide the name of the project (**Name**).
1. Select the theme from the drop-down options list (**Theme**).
1. Set the location (**Location**).
1. (Optional) Provide a description of the project (**Description**).
1. Click **Save** to close the **Create App** dialog box. As a result, the Dashboard displays the card for your new project with its defined properties.

// screen

## Editing Application Properties

1. On the **Design App** page, go to the card of the application.
1. Open the **Gear** drop-down options list and select **Properties**. As a result, the **Edit App** dialog box opens.
1. In **Edit App**, update the properties you want.
1. Click **Save** to save your changes, or click **Cancel** to discard your updates.

// screen  

## Deleting Applications

1. On the Dashboard, go to the card of the application.
1. Open the **Gear** drop-down options list and select **Delete**.

> Apart from the delete operation, the **Gear** menu on the application card provides options for duplicating, exporting, removing, and revealing the application. For more information, refer to the documentation on the [application status and migration]({% slug migration_kuib %}).

## Defining User Roles

1. On the Dashboard, go to the card of the application.
1. Open the **Gear** drop-down options list and select **Roles**. As a result, the **Authorization Roles** dialog box opens.
1. Define a user role (**Roles**) and click **Add Role**. As a result, the user role is added to the list below.
1. Click **Save** to save your changes, or click **Cancel** to discard your updates.

## Importing Applications

...

## Adding Modules

By default, the **App Design** page provides the built-in App Module which contains the Login, Landing Page, Unauthorized, and App Layout views. For more information, refer to the articles on [modules]({% slug modulesoverview_kuib %}) and [views]({% slug viewsoverview_kuib %}).

To add a module:

1. On the **App Design** page, click **Add Module**. As a result, the **Add Module** dialog box appears.
1. Provide the name of the module (**Name**).
1. Define the label of the module (**Label**).
1. (Optional) Provide a description of the project (**Description**).
1. Define the access rights (**Roles**).
1. Click **Add Module** to close the **Add Module** dialog box. As a result, the **App Design** page displays the card for your new module with its defined properties.

// screen

## Editing Module Properties

1. On the **Design App** page, go to the card of the module.
1. Open the **Gear** drop-down options list and select **Properties**. As a result, the **Edit Module** dialog box opens.
1. In **Edit Module**, update the properties you want.
1. Click **Save** to save your changes, or click **Cancel** to discard your updates.

// screen

## Deleting Modules

1. On the **App Design** page, go to the card of the module.
1. Open the **Gear** drop-down options list and select **Delete**.

The order of the modules on the **App Design** page corresponds to the order in which they will be rendered by the application at runtime. To reorder the modules, drag and drop them within the list.

## Adding Data Providers

The **App Design** page provides the options to define the settings for the data providers. For more information, refer to the article on [data providers]({% slug dataprovidersoverview_kuib %}).

To add a data provider:

1. On the **App Design** page, click **Add Data Provider**. As a result, the **Add Data Provider** dialog box appears.
1. Select the data service you want to utilize (**OData**, **Generic REST**, **Progress Data**).
1. Provide the name of the data provider (**Name**).
1. Enter the URI of the data provider (**Service URI**).
1. (Optional) Test whether the URI is working by clicking **Test Connection**.
1. (Optional) By default, the automatic creation of data sources is activated. To set it to manual, uncheck the **Auto-create Data Sources** checkbox.
1. Set the authentication type of the user roles by selecting an option from the **Authentication Type** drop-down list.
1. Click **Add Data Provider** to close the **Add Data Provider** dialog box. As a result, the **App Design** page displays the card for your new data provider with its defined properties.

// screen

## Editing Data Provider Properties

1. On the **Design App** page, go to the card of the data provider.
1. Open the **Gear** drop-down options list and select **Properties**. As a result, the **Edit Data Provider** dialog box opens.
1. In **Edit Data Provider**, update the properties you want.
1. Click **Save** to save your changes, or click **Cancel** to discard your updates.

// screen

## Deleting Data Providers

1. On the **App Design** page, go to the card of the data provider.
1. Open the **Gear** drop-down options list and select **Delete**.

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
* [Debugging the Application]({% slug debugging_kuib %})
