---
title: Progress Data
page_title: Progress Data - Data Providers - Kendo UI Builder
description: "Use the available Progress Data service which is supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: progressdata_kuib
position: 5
---

# Progress Data

The Progress Data service is based on the [`progress.data.JSDO`](https://documentation.progress.com/output/pdo/index.html#page/pdo/progress.data.jsdo-class.html) class.

The JSDO class is a connector to the mobile services that are provided by Progress and which produce metadata. The catalog file is an extended version and describes the data in a custom format. The catalog file that is necessary for adding the Progress Data provider describes what the service will return and how its endpoints are configured.

## Setting Progress Data Providers

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Add Data Provider**. As a result, the **Add Data Provider** dialog box appears.
1. Select the **Progress Data** data provider.
1. In **Name**, provide the name of the data provider.
1. In **Service URI**, enter the root URI of the data provider (the Service URI).
1. (Optional) Test whether the URI is working by clicking **Test Connection**.
1. In **Catalog URI**, enter the URI of the data provider catalog `.json` file&mdash;for example, https://oemobiledemo.progress.com/OEMobileDemoServices/static/CustomerService.json. The catalog file is generated when the data object service is built and deployed on the server.

  > * If the catalog URI specifies a protected URI, use the **Enable Local Catalog** option to request an unprotected catalog file for design-time access. **Enable Local Catalog** allows you to browse for a catalog file that you can use on your system and which is then saved as part of your metadata. At runtime, the catalog URI is always used.
  > * Once you enter and save the type, name, service and catalog URI options, you can edit them only after you publish a deployment build. In the generated build settings, you can change both the published service and catalog URIs.

1. (Optional) By default, the **Auto-create Data Sources** checkbox is selected. This means that the Builder automatically generates and relates the data sources based on the defined resources. For example, if the resource is enabled for at least one CRUD operation, the Builder will create a data source for a single table by using the resource name of the table from the `.json` catalog file.

  > If you deselect the **Auto-create Data Sources** checkbox, you have to manually create and relate the data sources after the data provider is created. For more information, refer to the article on [data sources]({% slug datasources_kuib %}).

1. In **Authentication Model**, select the security model for the service and catalog URI. The model has to match the authentication model of the web application (web server) which provides the data object service. For more information, refer to the article on [authentication]({% slug authentication_kuib %}).

  * **Anonymous**&mdash;Indicates that the provider data is not protected by authentication.
  * (Angular only) **Basic**&mdash;Indicates that the provider data is protected with a username and a password that are required when the user makes a request.
  * (Angular only) **Form**&mdash;Similar to **Basic**, indicates that the provider data is protected with a username and a password, but the JSDOSession intercepts the form that is sent by the web application and handles the authentication without displaying that form.

1. Click **Add Data Provider** to save the settings of the data provider and close the **Add Data Provider** dialog box. As a result, the **App Design** page displays the card for the newly added data provider.

## Suggested Links

* [Progress JSDO Class and Object Reference](https://documentation.progress.com/output/pdo/index.html#page/pdo/progress.data.jsdo-class.html)
