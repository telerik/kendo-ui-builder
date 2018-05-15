---
title: Generic REST
page_title: Generic REST - Data Providers - Kendo UI Builder
description: "Use the available generic REST services which are supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: rest_kuib
position: 4
---

# Generic REST

Due to the specifics of the [generic REST data services](http://www.restapitutorial.com/lessons/whatisrest.html), the Builder supports the data provider regardless of the framework your web project uses.

Every data source for the CRUD data operations defines its own endpoint. The data provider supports a base URL so that you can define an endpoint for each data source and each CRUD data operation.

Currently, the Builder does not support hierarchy for the generic REST data provider and has no schema of the data it contains. This means that you can call the data service but cannot relate the data sources through the Builder. To establish the relation between the data, you have to manually add all data fields&mdash;for example, set the types and editors.

## Setting Generic REST Data Providers

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Add Data Provider**. As a result, the **Add Data Provider** dialog box appears.
1. Select the **Generic REST** data provider.
1. In **Name**, provide the name of the data provider.
1. In **Base URI**, enter a base URI which is the root URI of a REST service. For example, http://Your-IP-Address:8980/api.
1. In **Authentication Type**, select the security model for the service and catalog URI. The model has to match the authentication model of the web application (web server) which provides the data object service. For more information, refer to the article on [authentication]({% slug authentication_kuib %}).

  * **None**&mdash;Indicates that the provider data is not protected by authentication.
  * **OpenID Connect**&mdash;Indicates that the provider data is through an identity layer on top of the OAuth 2.0 protocol.
  * (Angular only) **OAuth 2.0**&mdash;Indicates that provider data is protected for authorization through the OAuth 2.0 protocol.
  * (Angular only) **Basic**&mdash;Indicates that the provider data is protected with a username and a password that are required when the user makes a request.
  * (Angular only) **API Key**&mdash;Indicates that the provider data is protected with an API key token that is required when the user makes API calls.

1. Click **Add Data Provider** to save the settings of the data provider and close the **Add Data Provider** dialog box. As a result, the **App Design** page displays the card for the newly added data provider.

## Suggested Links

* [REST Tutorial](http://www.restapitutorial.com/lessons/whatisrest.html)
