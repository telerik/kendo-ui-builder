---
title: Translation of Messages
page_title: Translation of Messages - Globalization - Kendo UI Builder
description: "Translate the messages of the components when working with the Kendo UI Builder."
slug: messages_kuib
position: 2
---

# Translation of Messages

You can translate the components into different languages by obtaining the built-in or implementing your custom messages.

For the list of the Kendo UI for Angular components which provide options for translating custom messages, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The localized messages can be used both individually and jointly between the available sources:
* [Angular i18n message files](#toc-using-the-angular-i18n-framework)
* [Message service](#toc-using-the-message-service)
* [Message attributes](#toc-using-the-message-attributes)

> * Message attributes take precedence over other sources.
> * Message files take precedence over the message service.

## Using the Angular i18n Framework

Angular delivers a dedicated toolset for localizing application messages. For more information on how to use the framework, refer to the [Internationalization (i18n) Cookbook](https://angular.io/docs/ts/latest/cookbook/i18n.html) article.

The following sample project uses the Angular CLI to help manage the i18n tasks. For more information, refer to the article on [Angular CLI Internationalization](https://github.com/angular/angular-cli/wiki/stories-internationalization). For the complete sample application, refer to [github.com/telerik/kendo-angular-i18n-sample](https://github.com/telerik/kendo-angular-i18n-sample).

To utilize the Angular localization approach in the sample application:   

1. [Set up the project](#toc-setting-up-the-project)
1. [Add the texts for localization](#toc-adding-the-texts-for-localization)
1. [Add a Kendo UI component for Angular](#toc-adding-the-grid-component)
1. [Extract the application messages for localization](#toc-extracting-the-messages)
1. [Translate the messages into Spanish](#toc-translating-the-messages)
1. [Populate the translations in the application](#toc-populating-the-translations)
1. [Run the application for the target locale](#toc-initiating-the-application)

...

## Suggested Links
