---
title: Designing
page_title: Designing | Kendo UI Builder
description: "..."
slug: designingtheapp_kuib
position: 3
---

# Designing the Application

The Builder provides options to set the properties of the application and to add or edit its modules, views, and components.  

## Creating the Application

When you select the **Create App** option from the Dashboard, the Builder loads the **Create App** page where you set the properties of the application.

1. Choose the framework.
1. Provide the name of the project.
1. Select the theme from the drop-down options list.
1. Set the location.
1. (Optional) Provide a description of the project.
1. Save the settings.

// screen  

## Managing Root Level Operations

Once the application is created, the Builder loads the **App Design** page.

### Authorization Roles

The **App Design** page provides options for setting the user roles, access rights, and authorization rules that will apply to the application. For more information, refer to the documentation on [authentication and authorization]({% slug authentication_kuib %}).

// screen

### Deployment

The **App Design** page provides options for generating and locally running your application so that you can debug and prepare the project for deployment. For more information, refer to the article on [debuggging]({% slug debugging_kuib %}).

> You can also access the deployment options from the toolbar that is available in each view.

From the **App Design** page you can:

* Generate the latest source code and outputs it in a local folder.
* Start the local dev server and open the application in your default browser.
* Trigger the Watch mode of the Builder and debug the project at runtime.
* Build the application and prepare it for deployment in your environment in the debug or release mode.

// screen

### Modules

By default, the **App Design** page provides the built-in App Module which contains the Login and the App Layout views. For more information, refer to the articles on [modules]({% slug modulesoverview_kuib %}) and [views]({% slug viewsoverview_kuib %}).

From the **App Design** page you can:

* Add a new module by clicking **Add Module**.
* Change the order of the modules by dragging and dropping them within the list. The order of the modules on this page corresponds to the order in which they will be rendered by the application at runtime.
* Edit the user-defined module properties, delete a module or its views by using the **Gear** menu on the module card.
* Add or edit views in a module by clicking its card.

// screen

### Data Providers

The **App Design** page provides the options to define the settings for the data providers on root level. For more information, refer to the article on [data providers]({% slug dataprovidersoverview_kuib %}).

From the **App Design** page you can:

* Add a data provider by clicking **Add Data Provider**.
* Edit the properties or delete a data provider by using the **Gear** drop-down options list of the card.
* Add or edit a data source by using the **Gear** drop-down options list of the card.

// screen

## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Dashboard]({% slug dashboard_kuib %})
* [Debugging and Releasing]({% slug debugging_kuib %})
