---
title: Authentication
page_title: Authentication - Authentication & Authorization - Kendo UI Builder
description: "Use and configure the authentication types that are supported by the Kendo UI Builder."
slug: authentication_kuib
position: 1
---

# Authentication

Most backend services require authentication.

The authentication types that are supported by the Builder provide flexible implementation and can be extended.

## Overview

Authentication is tightly related with data providers and each data provider delivers its own authentication settings. As a result, while it is not recommended, an application that is created with the Builder can simultaneously support different authentication types. To avoid multiple user sign-ins, during the code generation the Builder detects similar authentication settings and groups them in one.

## Authentication Types

* [OpenID Connect](#toc-openid-connect)
* [OAuth 2.0](#toc-oauth-20)
* [Basic](#toc-basic)
* [API Key](#toc-api-key)
* [JSDO](#toc-jsdo)

### OpenID Connect

OpenID Connect is the most suitable authentication type for single-page applications (SPAs). The Builder supports only [Implicit Flow](http://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth) because it generates static JavaScript applications.

> The OpenID Connect authentication is supported by the OData and generic REST data providers. For more information, refer to the articles on [data providers]({% slug dataprovidersoverview_kuib %}).

To set up the OpenID Connect authentication in the web project:

1. Create a new data provider or edit the existing one.
1. From the **Authentication Type** drop-down, select **OpenID Connect**. As a result, the following settings are displayed:

* (Required) **Authority**&mdash;Represents the URL of the OIDC/OAuth2 provider.
* (Required) **Client ID**&mdash;Represents the identifier of the user as registered with the OIDC provider.
* (Required) **Response Type**&mdash;Represents the type of response demanded by the OIDC provider. Defaults to `id_token token`.
* (`openid` is required) **Scope**&mdash;Represents the scope that is requested by the OIDC provider. Defaults to `openid email`.

### OAuth 2.0

The Builder supports only [Implicit Grant](https://tools.ietf.org/html/rfc6749#section-4.2) because it generates static JavaScript applications.

> * The OAuth 2.0 authentication is supported by the OData and generic REST data providers. For more information, refer to the articles on [data providers]({% slug dataprovidersoverview_kuib %}).
> * The OAuth 2.0 authentication is supported for Angular applications.

To set up the OAuth 2.0 authentication in the web project:

1. Create a new data provider or edit the existing one.
1. From the **Authentication Type** drop-down, select **OAuth 2.0**. As a result, the following settings are displayed:

* (Required) **Issuer**&mdash;Represents the URL of the OAuth2 Authorization Server.
* (Required) **Authorization Endpoint**&mdash;Represents the URL that is used to obtain an authorization grant.
* (Required) **Client ID**&mdash;Represents the application identifier as registered with the OAuth2 provider.
* (Required) **Response Type**&mdash;Represents the type of response demanded by the OAuth2 provider. Defaults to `token`.
* (Required) **Scope**&mdash;Represents the scope that is requested by the OAuth2 provider. Defaults to `email`. Even though in the OAuth 2.0 protocol the field is optional, it is mandatory here because in practice every OAuth2 provider has a basic scope.

### Basic

While the Basic authentication is not suitable for static web applications, the Builder supports it for cases with no other available option. To obtain the user credentials, each generated application provides a login screen at runtime and keeps the credentials in a session storage.

> * The Basic authentication is supported by the OData and generic REST data providers. For more information, refer to the articles on [data providers]({% slug dataprovidersoverview_kuib %}).
> * The Basic authentication is supported for Angular applications.

To set up the Basic authentication in the web project:

1. Create a new data provider or edit the existing one.
1. From the **Authentication Type** drop-down, select **Basic**. As a result, the following settings are displayed:

* **User Name**&mdash;Represents the user name that will be used only at design time when an HTTP request to a protected URL is performed. The user name is not stored in the generated application.
* **Password**&mdash;Represents the password that will be used only at design time when an HTTP request to a protected URL is performed. The password is not stored in the generated application.

### API Key

Usually, the API Key authentication is used in server-side API calls. The Builder supports the API Key authentication type for rare cases when no API is provided on the client side. Each generated application provides a screen for entering an API key at runtime and keeps the API key in a session storage.

> * The API Key authentication is supported by the OData and generic REST data providers. For more information, refer to the articles on [data providers]({% slug dataprovidersoverview_kuib %}).
> * The API Key authentication is supported for Angular applications.

To set up the API Key authentication in the web project:

1. Create a new data provider or edit the existing one.
1. From the **Authentication Type** drop-down, select **API Key**. As a result, the following settings are displayed:

* **Name**&mdash;Represents the name of the API Key that is passed in an HTTP request. Defaults to `X-API-Key`.
* **In**&mdash;Specifies the way the API Key will be passed in an HTTP request. The available options are `Header` or `Query String`.
* **Value**&mdash;Represents the API Key value that will be used only at design time when an HTTP request to a protected URL is performed. The value is not stored in the generated application.

> If you select an API Key to be passed in an HTTP header, CORS issues might occur.

### JSDO

The JSDO authentication type denotes authentication support that is integrated in the [JSDO library](https://github.com/progress/JSDO) and used by the Progress Data provider. To set up the authentication for the Progress Data provider, specify the **Authentication Model** in its settings. The available options are **Anonymous**, **Basic**, and **From**.

## Extensibility

The authentication feature in the Builder can be extended.

To implement your own authentication:

1. Create an authentication provider.
1. Inherit `AuthenticationService` to implement your provider initialization.
1. Replace the service registration of the base `AunthenticationService` with your inherited `AuthenticationService`.

## Suggested Links

* [OpenID Connect Protocol](http://openid.net/connect/)
* [OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
