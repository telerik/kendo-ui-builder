---
title: Translation of Messages
page_title: Translation of Messages - Globalization - Kendo UI Builder
description: "Translate the messages of the components when working with the Kendo UI Builder."
slug: messages_kuib
position: 2
---

# Translation of Messages

The Builder provides option for updating the default US culture and label of the generated application.

## Customizing the Culture  

1. Open the **Edit App** dialog to set the desired culture for the application.
1. Generate the application. As a result, the Builder creates a `<webapp_directory>/artifacts/translations/translations.default.json` translation file which contains all messages that are available for translation.
1. (Optional) Set up the localization of the generated application so that users can choose from any of the following language cultures:

    * German-Germany (de-DE)
    * English-UK (en-GB)
    * English-US (en-US)
    * Spanish-Spain (es-ES)
    * French-France (fr-FR)

    As a result, the respective date, time, and number locale formats are automatically localized by the Builder. You can also manually add culture-specific translations for all messages&mdash;for example, module and view labels.

To begin, make a copy of the translations.default.json file located in <webapp_directory>/artifacts/translations and replace the suffix default in the filename with the language culture that you want to add. For example, replace default with de-DE or fr-FR as shown here:



## Suggested Links
