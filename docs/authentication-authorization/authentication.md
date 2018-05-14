---
title: Authentication
page_title: Authentication - Setup & Migration - Kendo UI Builder
description: "..."
slug: authentication_kuib
position: 2
---

# Authentication

In most common cases backend services require authentication. Kendo UI builder provides support for different authentication types. It is implemented in very flexible way in order to be easiliy extended with more authentication types.

## Overview

Authentication is tightly related with data providers. That's why every data provider has its own authentication settings. This means that application created with the Kendo UI Builder could support different authntication types simultaneously even we do not ecourage you to do that. Kendo UI Builder detects similar authentication settings in order to minimize the count of sign in operations.

## Authentication Types

### OpenID Connect

This is most suitable authetentication type fos SPA applications. As the Kendo UI Builder generates static javascript application it supports only [Implicit Flow](http://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth).

> Only **OData** and **REST** provider types support it.

In order to setup **OpenID Connect** authentication for the application you can create new data provider or edit existing one. Find **Authentication Type** drop-down and select **OpenID Connect** option. You will see the following settings:

| Name | Description | Note |
| ---- | ----------- |----- |
| Authority | The URL of the OIDC/OAuth2 provider | It is required |
| Client ID | Your client application's identifier as registered with the OIDC provider. | It is required |
| Response Type | The type of response desired from the OIDC provider. | Default: 'id_token token'. It is required. |
| Scope | The scope being requested from the OIDC provider | Default: 'openid email'. At least 'openid' required.

### OAuth 2.0

As the Kendo UI Builder generates static javascript application it supports only [Implicit Grant](https://tools.ietf.org/html/rfc6749#section-4.2).

> * Only **OData** and **REST** provider types support it.
> * Supported only in **Angular** applications.

In order to setup **OAuth 2.0** authentication for the application you can create new data provider or edit existing one. Find **Authentication Type** drop-down and select **OAuth 2.0** option. You will see the following settings:

| Name | Description | Note |
| ---- | ----------- |----- |
| Issuer | The URL of the OAuth2 Authorization Server | It is required |
| Authorization Endpoint | The URL used to obtain an authorization grant | It is required |
| Client ID | Your client application's identifier as registered with the OAuth2 provider. | It is required |
| Response Type | The type of response desired from the OAuth2 provider. | Default: 'token'. It is required. |
| Scope | The scope being requested from the OAuth2 provider | Even it is optional in the OAuth 2.0 protocol it is required here because in practice every OAuth2 provider has a basic scope.

### Basic

Even though Basic Authentication is not so suitable for static web applications Kendo UI Builder added support for it in cases where there is no other option. Generated application provides login screen at run-time in order to obtain user credentials. It keeps user credentials in a session storage.

> * Only **OData** and **REST** provider types support it.
> * Supported only in **Angular** applications.

In order to setup **Basic** authentication for the application you can create new data provider or edit existing one. Find **Authentication Type** drop-down and select **Basic** option. You will see the following settings:

| Name | Description | Note |
| ---- | ----------- |----- |
| User Name | User Name that will be used only at design time when an http request to a protected url is performed | It will not be stored anywhere in the generated application |
| Password | Password that will be used only at design time when an http request to a protected url is performed | It will not be stored anywhere in the generated application |

### API Key

API Key is usualy used in server-side API calls. Kendo UI Builder supports this authenticatrion type in rare cases where an API is not designed to be used client-side. Generated application provides a screen for entering an API key at run-time. It keeps the API key in a session storage.


> * Only **OData** and **REST** provider types support it.
> * Supported only in **Angular** applications.

In order to setup **API Key** authentication for the application you can create new data provider or edit existing one. Find **Authentication Type** drop-down and select **API Key** option. You will see the following settings:

| Name | Description | Note |
| ---- | ----------- |----- |
| Name | Name of the API Key passed in a http request | Default: 'X-API-Key' |
| In | Specifies how API key will be passed in a http request | Available options: `Header` or `Query String` |
| Value | API Key value that will be used only at design time when an http request to a protected url is performed | It will not be stored anywhere in the generated application |

> Be aware of CORS issues If you select API key to be passed in a http header.

### JSDO

JSDO Authentication type denotes authentication support integrated in [JSDO library](https://github.com/progress/JSDO) used by Progress Data Provider. You can setup authentication for Progress Data Provider by specifying **Authentication Model** in its settings. Available options are: `Anonymous`, `Basic` and `From`.


## Extensibility

Authentication support in Kendo UI Builder is designed to be extensible. If you want to implement your own authentication you should create an authentication provider. Then you shoud inherit AuthenticationService in order to implement your provider initialization. The final step is to replace service registration of base AunthenticationService with your inherited AuthenticationService.

## Suggested Links

* [OpenID Connect protocol](http://openid.net/connect/)
