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

For the generic REST data provider, the Builder does not support hierarchy and has no schema of the data it contains. This means that you can call the data service but cannot relate the data sources through the Builder. To establish the relation between the data, you have to manually add all data fields&mdash;for example, set the types and editors.  

## Setting Generic REST Data Providers

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. On the **App Design** page, click **Add Data Provider**. As a result, the **Add Data Provider** dialog box appears.
1. Select among the **OData**, **Generic REST**, and **Progress Data** data providers.
1. In **Name**, provide the name of the data provider.
1. In **Base URI**, enter a base URI which is the root URI of a REST service. For example, http://Your-IP-Address:8980/api.
1. In **Authentication Type**, select the security model for the service and catalog URI. The model has to match the authentication model of the web application (web server) which provides the data object service.

  * **None**&mdash;Indicates...
  * **OpenID Connect**&mdash;Indicates...
  * **Basic**&mdash;Indicates...
  * **API Key**&mdash;Indicates...

1. Click **Add Data Provider** to save the settings of the data provider and close the **Add Data Provider** dialog box. As a result, the **App Design** page displays the card for the newly added data provider.

## Suggested Links

* [RestApiTutorial.com](http://www.restapitutorial.com/lessons/whatisrest.html)
