---
title: Messages and Cultures
page_title: Messages and Cultures - Globalization - Kendo UI Builder
description: "Translate the application messages and change the culture locale when working with the Kendo UI Builder."
slug: messages_kuib
position: 2
---

# Messages and Cultures

Each time the Builder generates the application, it produces a `translations.default.json` file.

The `<webapp_directory>/artifacts/translations/translations.default.json` JSON file contains the translatable application strings in the default `en-US` culture and lists them in a hierarchical order. For example, modules -> views -> components.

Under its `"language"` entry, each `translations.default.json` lists the following fields:

* `"label"`&mdash;Indicates the name of the language as it will appear in the drop-down language-selection list of the generated project.
* `"culture"`&mdash;Indicates the culture locale convention that will apply to the date, time, and number entries in the generated project.  
* `"order"`&mdash;Indicated the order in which the languages will be listed in the drop-down language-selection list of the generated project.

To change the culture and translate the application messages:

1. Go to `<webapp_directory>/artifacts/translations/`.
1. Copy the `translations.default.json` file in the same directory.
1. Rename it while keeping its `.json` extension. For example, set the name to `translations.german.json`.
1. Open `translations.german.json`.
1. Update the `"label"` property. For example, replace the default `"English"` entry with `"Deutsch"`.
1. Update the `"culture"` property. For example, replace the default `"en-US"` entry with `"de-DE"`.
1. Update the `"order"` property. For example, replace the default `"0"` entry with `"1"`.
1. To translate the available application messages, replace all translatable default strings with their respective translations in the desired language. For example, if you have a `Customers` field, replace `"Customers"` with `"Kunden"`.
1. Save the file.

The web project generation updates only the `translations.default.json` file. This means that if you add any new sections to your web project after you have changed the culture and translated the messages, you need to manually copy and paste the strings from the new section to the specific language file. For example, if you have already created the `translations.german.json` file and translated its strings, and then then add a new `Emails` module and generate the application, you have to copy the translatable `Emails` strings from `translations.default.json` to `translations.german.json`, and translate its messages.  

## Suggested Links

* [Globalization by Kendo UI Builder]({% slug globalizationoverview_kuib %})
* [Internationalization by Kendo UI for Angular](http://k2build.openstack.progress.com/kendo-angular-ui-develop/components/internationalization/)
* [Localization by Kendo UI for Angular](http://k2build.openstack.progress.com/kendo-angular-ui-develop/components/localization/)
* [Internationalization by Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/framework/globalization/overview)
* [Localization by Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/framework/localization/overview)
