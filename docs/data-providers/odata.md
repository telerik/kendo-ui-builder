---
title: OData
page_title: OData - Data Providers - Kendo UI Builder
description: "Use the available OData service which is supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: odata_kuib
position: 4
---

# OData

[OData (Open Data Protocol)](http://www.odata.org/getting-started/basic-tutorial/) is a standard for specifying REST endpoint services.

The Builder supports:
* OData version 4 for Angular.
* OData versions 2, 3, and 4 for AngularJS.

## Setting OData Providers

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Add Data Provider**. As a result, the **Add Data Provider** dialog box appears.
1. Select among the **OData**, **Generic REST**, and **Progress Data** data providers.
1. In **Name**, provide the name of the data provider.
1. In **Service URI**, enter the URI of the OData Service. For example, http://Your-IP-Address:8980/OData/Inventory.svc.
1. (Optional) Test whether the URI is working by clicking **Test Connection**.
1. (Optional) By default, the **Auto-create Data Sources** checkbox is selected. This means that the Builder automatically generates and relates the data sources based on the defined resources in **Service URI**/$metadata.

  > If you deselect the **Auto-create Data Sources** checkbox, you have to manually create and setup the data sources after the data provider is created. For more information, refer to the article on [data sources]({% slug datasources_kuib %}).

1. In **Authentication Type**, select the security model for the service and catalog URI. The model has to match the authentication model of the web application (web server) which provides the data object service. All authentication types strictly follow the protocols specifications.

  * **None**&mdash;Indicates that the provider data is not protected with authentication.
  * **OpenID Connect**&mdash;Indicates that provider data is protected via identity layer on top of the OAuth 2.0 protocol.
  * **OAuth 2.0**&mdash; (Supported only in Angular) Indicates that provider data is protected via OAuth 2.0 protocol for authorization.
  * **Basic**&mdash; (Supported only in Angular) Indicates that provider data is protected with username and password when making a request.
  * **API Key**&mdash; (Supported only in Angular) Indicates that provider data is protected with API key token that a client provides when making API calls.

  For more information, refer to the article on [Authentication]({% slug authentication_kuib %}).

1. Click **Add Data Provider** to save the settings of the data provider and close the **Add Data Provider** dialog box. As a result, the **App Design** page displays the card for the newly added data provider.

## Suggested Links

* [OData (Open Data Protocol)](http://www.odata.org/getting-started/basic-tutorial/)
