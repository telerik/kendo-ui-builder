---
title: Designing
page_title: Designing | Kendo UI Builder
description: "Create your web application and manage its root level operation from the App Design page which is provided by the Kendo UI Builder."
slug: designingtheapp_kuib
position: 3
---

# Designing the Application

The Builder enables you to set and update application properties and to add and edit its modules and data providers.

> All **Name** fields are restrictive. If the symbols you placed in them are not supported, the following error message is displayed: `Invalid format. Only letters, numbers, "_" and "-" are allowed. Name can't start with digit or dash and should contain at least one letter.`

## Application Settings

The Dashboard provides options for creating or deleting an application, editing its properties, and defining user roles.

### Creating Applications

1. On the Dashboard, select the **Create App** option to open the **Create App** dialog box.
1. In **Create App** > **Target Framework**, select the framework by clicking on the option.
1. In **Name**, provide the name of the project.
1. (Optional) In **Theme**, select the theme from the drop-down options list.
1. (Optional) In **Location**, set the location.
1. (Optional) In **Description**, provide a short description of the project.
1. Click **Save** to save the application properties and close the **Create App** dialog box. As a result, the Dashboard displays the card (or list item) for your new project with the properties you defined.

// screen?

### Editing Application Properties

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. Next to the application name, click the **Settings** icon to open the drop-down options list.
1. Select **Properties** to open the **Edit App** dialog box.
1. In **Edit App**, update the properties you want.
1. Click **Save** to save or **Cancel** to discard your changes.

// screen?

### Deleting Applications

1. On the Dashboard, go to the card (or list item) of the application.
1. Click the **Settings** icon to open the drop-down options list.
1. Select **Delete**.

> For more information on the other available status operations in **Settings**, refer to the article on [managing applications]({% slug managingtheapp_kuib %}).

// screen?

### Defining User Roles

1. On the Dashboard, go to the card (or list item) of the application.
1. Click the **Settings** icon to open the drop-down options list.
1. Select **Roles** to open the **Authorization Roles** dialog box.
1. In **Roles**, define a user role.
1. Click **Add Role** to add the user role to the list below.
1. Click **Save** to save or **Cancel** to discard your changes.

### Importing Applications

1. On the Dashboard, select the **Import App** option to open the dialog box for selecting the location.
1. Select the location of the project you want to import.
1. Click **Select Folder** to confirm the import of the application. As a result, the Dashboard displays the card (or list item) for your imported project.

// screen?

## Module Settings

The Builder provides each new project with a default Application Module (App Module). For more information, refer to the article on the [App Module]({% slug viewsoverview_kuib %}).

### Adding Modules

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Add Module**. As a result, the **Add Module** dialog box appears.
1. In **Name**, provide the name of the module.
1. (Optional) Click the **Icon/Color** icon to add an icon to the module and to select a color for the icon and the background. Click **Apply** to save or **Cancel** to discard your changes.
1. (Optional) In **Label**, define the name of the module as it will appear in the menu and on the landing page of the generated application.
1. (Optional) In **Description**, provide a short description of the module as it will appear as a tooltip on the landing page of the generated application.
1. (Optional) Define the access rights (**Roles**).
1. Click **Add Module** to save the module properties and close the **Create Module** dialog box. As a result, the **App Design** page displays the card for your new module with the properties you defined.

// screen

### Editing Module Properties

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App  Design** page, go to the card of the module whose properties you want to update.
1. Click the **Settings** menu to open the drop-down options list.
1. Select **Properties** to open the **Edit Module** dialog box.
1. In **Edit Module**, update the properties you want.
1. Click **Save** to save or **Cancel** to discard your changes.

// screen

### Deleting Modules

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, go to the card of the module you want to delete.
1. Click the **Settings** icon to open the drop-down options list.
1. Select **Delete**.

// screen

### Reordering Modules

The order of the modules on the **App Design** page corresponds to the order in which they will be rendered by the application at runtime. To reorder the modules, drag and drop them within the list.

## Data Provider Settings

The Builder provides settings for managing the data providers. For more information, refer to the article on [data providers]({% slug dataprovidersoverview_kuib %}).

### Adding Data Providers

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Add Data Provider**. As a result, the **Add Data Provider** dialog box appears.
1. Select among the **OData**, **Generic REST**, and **Progress Data** data providers.
1. In **Name**, provide the name of the data provider.
1. In **Service URI**, enter the URI of the data provider.
1. (Optional) Test whether the URI is working by clicking **Test Connection**.
1. (Optional) By default, the automatic creation of data sources is active.

  > If you uncheck the **Auto-create Data Sources** box, you will have to manually create and relate the data sources of the data providers.    

1. In **Authentication Type**, select one of the **OpenID Connect**, **Basic**, **API Key**, or **None** options. Depending on the authentication type, fill in the additional fields. For more information, refer to the documentation on [authentication and authorization roles]().

// MORE INFO ON OPTIONS!

1. Click **Add Data Provider** to save the data provider properties and close the **Add Data Provider** dialog box. As a result, the **App Design** page displays the card for your new data provider with the properties you defined.

// screen

### Editing Data Provider Properties

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, go to the card of the data provider whose properties you want to update.
1. Click the **Settings** menu to open the drop-down options list.
1. Select **Properties** to open the **Edit Data Provider** dialog box.
1. In **Edit Data Provider**, update the properties you want.
1. Click **Save** to save or **Cancel** to discard your changes.

// screen

### Deleting Data Providers

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, go to the card of the data provider you want to delete.
1. Click the **Settings** icon to open the drop-down options list.
1. Select **Delete**.

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
* [Debugging the Application]({% slug debugging_kuib %})
* [Basic Approaches for Building Applications]({% slug fewclicks_kuib %})
