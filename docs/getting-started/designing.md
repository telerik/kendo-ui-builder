---
title: Designing
page_title: Designing - Getting Started - Kendo UI Builder
description: "Create your web application and manage its root level operation from the App Design page which is provided by the Kendo UI Builder."
slug: designingtheapp_kuib
position: 3
---

# Designing the Application

The Builder enables you to set and update application properties and to add and edit its modules, views, and data providers.

> All **Name** fields are restrictive. If the symbols you placed in them are not supported, the Builder displays the `Invalid format. Only letters, numbers, "_" and "-" are allowed.` error message.

* [Application settings](#toc-application-settings)
* [Module settings](#toc-module-settings)
* [View settings](#toc-view-settings)
* [Data provider settings](#toc-data-provider-settings)

## Application Settings

The Dashboard provides options for creating or deleting an application, editing its properties, and defining user roles.

> * For more information on handling the application state, managing options, and migration, refer to the articles on [managing the application]({% slug app_state_kuib %}).
> * For more information on setting access rights and defining user roles, refer to the articles on [authentication and authorization]({% slug authentication_kuib %}).

### Creating Applications

1. On the Dashboard, select the **Create App** option to open the **Create App** dialog box.
1. In **Create App** > **Target Framework**, select the framework by clicking on the option.
1. In **Name**, provide the name of the project.
1. (Optional) In **Theme**, select the theme from the drop-down options list.
1. (Optional) In **Location**, set the location.
1. (Optional) In **Description**, provide a short description of the project.
1. Click **Save** to save the application properties and close the **Create App** dialog box. As a result, the Dashboard displays the card (or list item) for your new project with the properties you defined.

<img src="../../images/kuib-create-app.png" class="img-responsive" alt="Creating Applications with the Kendo UI Builder"/>

### Editing Application Properties

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. Next to the application name, click the **Settings** icon to open the drop-down options list.
1. Select **Properties** to open the **Edit App** dialog box.
1. In **Edit App**, update the properties you want.
1. Click **Save** to save or **Cancel** to discard your changes.

<img src="../../images/kuib-...-app.png" class="img-responsive" alt="Editing Application Properties with the Kendo UI Builder"/>

### Deleting Applications

1. On the Dashboard, go to the card (or list item) of the application.
1. Click the **Settings** icon to open the drop-down options list.
1. Select **Delete**.

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

## Module Settings

The Builder provides each new project with a default Application Module (App Module).

> For more information on modules types and the App Module features, refer to the articles on [modules]({% slug modulesoverview_kuib %}).

### Adding Modules

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Add Module**. As a result, the **Add Module** dialog box appears.
1. In **Name**, provide the name of the module.
1. (Optional) Click the **Icon/Color** icon to add an icon to the module and to select a color for the icon and the background. Click **Apply** to save or **Cancel** to discard your changes.
1. (Optional) In **Label**, define the name of the module as it will appear in the menu and on the landing page of the generated application.
1. (Optional) In **Description**, provide a short description of the module as it will appear as a tooltip on the landing page of the generated application.
1. (Optional) Click **Roles** to define the access rights for this view. For more information, refer to the article on [authorization and roles]({% slug rolesauthoriz_kuib %}).
1. Click **Add Module** to save the module properties and close the **Add Module** dialog box. As a result, the **App Design** page displays the card for your new module with the properties you defined.

<img src="../../images/kuib-module-add.png" class="img-responsive" alt="Adding Modules with the Kendo UI Builder"/>

### Editing Module Properties

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App  Design** page, go to the card of the module whose properties you want to update.
1. Click the **Settings** menu to open the drop-down options list.
1. Select **Properties** to open the **Edit Module** dialog box.
1. In **Edit Module**, update the properties you want.
1. Click **Save** to save or **Cancel** to discard your changes.

<img src="../../images/kuib-module-edit.png" class="img-responsive" alt="Editing Modules with the Kendo UI Builder"/>

### Deleting Modules

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, go to the card of the module you want to delete.
1. Click the **Settings** icon to open the drop-down options list.
1. Select **Delete**.

### Reordering Modules

The order of the modules on the **App Design** page corresponds to the order in which they will be rendered by the application at runtime. To reorder the modules, drag and drop them within the list.

## View Settings

The Builder provides options to add views, edit their properties, reorder, and delete them.

> For more information on view types and features, refer to the articles on the [views]({% slug viewsoverview_kuib %}).

### Adding Views

1. Go to the card of the created module and click on it.
1. Click **Add View**. As a result, the **Add View** dialog box appears.
1. Select the predefined view you want to add.
1. In **Name**, provide the name of the view.
1. (Optional) In **Label**, define the name of the view as it will appear in the menu and on the landing page of the generated application.
1. (Optional) Click **Roles** to define the access rights for this view. For more information, refer to the article on [authorization and roles]({% slug rolesauthoriz_kuib %}).
1. Click **Add View** to save the view properties and close the **Add View** dialog box. As a result, the module loads your new view with its defined properties and available options.

<img src="../../images/kuib-...-add.png" class="img-responsive" alt="Adding Views with the Kendo UI Builder"/>

### Editing View Properties

1. In the module where the view resides, click the **Settings** menu of the view to open the drop-down options list.
1. Select **Edit** to open the **Edit View** dialog box.
1. In **Edit View**, update the properties you want.
1. Click **Save** to save or **Cancel** to discard your changes.

<img src="../../images/kuib-...-edit.png" class="img-responsive" alt="Editing View Properties with the Kendo UI Builder"/>

### Deleting Views

1. In the module where the view resides, click the **Settings** menu of the view to open the drop-down options list.
1. Select **Delete**.

### Duplicating Views

1. In the module where the view resides, click the **Settings** menu of the view to open the drop-down options list.
1. Select **Duplicate** to open the **Duplicate View** dialog box.
1. In **Duplicate View**, update the properties you want.
1. Click **Save** to save or **Cancel** to discard your changes.

### Moving Views

1. In the module where the view resides, click the **Settings** menu of the view to open the drop-down options list.
1. Select **Move** to open the **Move View** dialog box.
1. In **Move View**, update the properties you want.
1. Click **Move View** to save or **Cancel** to discard your changes.

### Reordering Views

The order of the views on the module page corresponds to the order in which they will be rendered by the application at runtime. To reorder the views, drag and drop them within the module list.

## Data Provider Settings

The Builder provides settings for adding, editing, and deleting the data providers.

> For more information on handling the supported data services and setting their data sources, refer to the articles on [data providers]({% slug dataprovidersoverview_kuib %}).

### Adding Data Providers

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Add Data Provider**. As a result, the **Add Data Provider** dialog box appears.
1. Select the type of data provider.
1. In **Name**, provide the name of the module.
1. Fill in the respective the properties depending on the [OData]({% slug odata_kuib %}), [Generic REST]({% slug rest_kuib %}), or [Progress Data]({% slug progressdata_kuib %}) provider you selected.
1. Click **Add Data Provider** to save the data provider properties and close the **Add Data Provider** dialog box. As a result, the **App Design** page displays the card for your new data provider with the properties you defined.

<img src="../../images/kuib-...-....png" class="img-responsive" alt="Adding Data Providers with the Kendo UI Builder"/>

### Editing Data Provider Properties

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, go to the card of the data provider whose properties you want to update.
1. Click the **Settings** menu to open the drop-down options list.
1. Select **Properties** to open the **Edit Data Provider** dialog box.
1. In **Edit Data Provider**, update the properties you want.
1. Click **Save** to save or **Cancel** to discard your changes.

<img src="../../images/kuib-...-....png" class="img-responsive" alt="Editing Data Provider Properties with the Kendo UI Builder"/>

### Deleting Data Providers

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, go to the card of the data provider you want to delete.
1. Click the **Settings** icon to open the drop-down options list.
1. Select **Delete**.

## Suggested Links

* [Dashboard]({% slug dashboard_kuib %})
* [Debugging the Application]({% slug debugging_kuib %})
* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
