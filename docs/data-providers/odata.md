---
title: OData
page_title: OData - Data Providers - Kendo UI Builder
description: "Use the available OData service which is supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: odata_kuib
position: 3
---

# OData

[OData (Open Data Protocol)](http://www.odata.org/getting-started/basic-tutorial/) is a standard for specifying REST endpoint services.

The Builder supports:
* OData version 4 for Angular.
* OData versions 2, 3, and 4 for AngularJS.

## Setting OData Providers

> All **Name** fields are restrictive. If the symbols you placed in them are not supported, the Builder displays the `Invalid format. Only letters, numbers, "_" and "-" are allowed.` error message.

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Add Data Provider**. As a result, the **Add Data Provider** dialog box appears.
1. Select the **OData** data provider.
1. In **Name**, provide the name of the data provider.
1. In **Service URI**, enter the URI of the OData Service. For example, http://Your-IP-Address:8980/OData/Inventory.svc.
1. (Optional) Test whether the URI is working by clicking **Test Connection**.
1. (Optional) By default, the **Auto-create Data Sources** checkbox is selected. This means that the Builder automatically generates and relates the data sources based on the defined resources in **Service URI** or `$metadata`.

  > If you deselect the **Auto-create Data Sources** checkbox, you have to manually create and set up the data sources after the data provider is created. For more information, refer to the article on [data sources]({% slug datasources_kuib %}).

1. In **Authentication Type**, select the security model for the service and catalog URI. The model has to match the authentication model of the web application (web server) which provides the data object service. All authentication types strictly follow the protocol specifications.

  * **None**&mdash;Indicates that the provider data is not protected by authentication.
  * **OpenID Connect**&mdash;Indicates that the provider data is protected through an identity layer on top of the OAuth 2.0 protocol.
  * (Angular only) **OAuth 2.0**&mdash;Indicates that the provider data is protected for authorization through the OAuth 2.0 protocol.
  * (Angular only) **Basic**&mdash;Indicates that the provider data is protected with a username and a password that are required when the user makes a request.
  * (Angular only) **API Key**&mdash;Indicates that the provider data is protected with an API key token that is required when the user makes API calls.

  For more information, refer to the article on [authentication]({% slug authentication_kuib %}).

1. Click **Add Data Provider** to save the settings of the data provider and close the **Add Data Provider** dialog box. As a result, the **App Design** page displays the card for the newly added data provider.

## Suggested Links

* [OData Tutorial](http://www.odata.org/getting-started/basic-tutorial/)
