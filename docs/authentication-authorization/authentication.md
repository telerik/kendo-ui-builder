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

Authentication is tightly related with data providers. That's why every data provider has its own authentication settings. This means that application created with the builder could support different authntication types simultaneously even we do not ecourage you to do that. Kendo UI builder detects similar authentication settings in order to minimize the count of sign in operations.

## Authentication Types

### OpenID Connect

This is most suitable authetentication type fos SPA applications. As the builder generates static javascript application it supports only [Implicit Flow](http://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth).

> Only **OData** and **REST** provider types support it.

In order to setup **OpenID Connect** authentication for the application you can create new data provider or edit existing one. Find **Authentication Type** drop-down and select **OpenID Connect** option. You will see the following settings:

| Name | Description | Note |
| ---- | ----------- |----- |
| Authority | The URL of the OIDC/OAuth2 provider | It is required |
| Client ID | Your client application's identifier as registered with the OIDC provider. | It is required |
| Response Type | The type of response desired from the OIDC provider. | Default: 'id_token token'. It is required. |
| Scope | The scope being requested from the OIDC provider | Default: 'openid email'. At least 'openid' required.

### OAuth 2.0

> * Only **OData** and **REST** provider types support it.
> * Supported only in **Angular** applications.

### Basic

> * Only **OData** and **REST** provider types support it.
> * Supported only in **Angular** applications.

### API Key

> * Only **OData** and **REST** provider types support it.
> * Supported only in **Angular** applications.

### JSDO

## Extensibility

...

## Suggested Links

* [OpenID Connect protocol](http://openid.net/connect/)
