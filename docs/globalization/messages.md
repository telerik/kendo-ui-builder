---
title: Translation of Messages
page_title: Translation of Messages - Globalization - Kendo UI Builder
description: "Translate the messages of the components when working with the Kendo UI Builder."
slug: messages_kuib
position: 2
---

# Translation of Messages

The Builder provides option for updating the default US culture and label of the generated application.

## Available Translatable Properties   

|Modules, Views, and Components         |Translatable Properties        
|:---                                   |:---                           
|All modules                            |`label`. `description`         
|Data Grid View                         |`label`. `title`, `columns`, `toolbarButtonsLabel`, `rowButtonLabels`  
|Data Grid Form View                    |`label`, `title`, `columns`, `newTitle`, `editTitle`     
|Data Grid Separate Form View           |`label`, `title`, `columns`, `newTitle`, `editTitle`        
|Hierarchical Data Grid View            |`label`, `parentTitle`, `childTitle`, `parentGridColumns`, `childGridColumns`, `childGridEditMessages`         
|Stacked Data Grid View                 |`label`, `parentTitle`, `childTitle`, `parentGridColumns`, `childGridColumns`, `childGridEditMessages`        
|Blank View                             |`label`        
|Grid                                   |`toolbarButtonLabels`, `rowButtonLabels`, `columns`         
|Boolean Radio Button List              |`trueText`, `falseText`         
|Currency Text Box                      |placeholder         
|Email Text Box                         |placeholder         
|Integer Text Box                       |placeholder         
|Numeric Text Box                       |placeholder         
|Password Text Box                      |placeholder         
|Percent Text Box                       |placeholder         
|Percent Value Text Box                 |placeholder         
|Text Area                              |placeholder         
|Text Box                               |placeholder         
|URL Text Box                           |placeholder         
|Label                                  |text         
|Button                                 |content         
|Area Charts                            |title text         
|Bar Charts                             |title text         
|Donut Charts                           |title text         
|Line Charts                            |title text         
|Pie Charts                             |title text        
|Expander                               |text, subcomponents         
|Tab Strip                              |tab text, subcomponents           
|Toolbar                                |button text, splitButton text, subitem text, buttonGroup button text         

# Customizing the Culture  

1. Open the **Edit App** dialog to set the desired culture for the application.
1. Generate the application. As a result, the Builder creates a `<webapp_directory>/artifacts/translations/translations.default.json` translation file which contains all messages that are available for translation.

    > The `translations.default.json` file provides a definition of all properties that can be translated in JSON format which enables you to add culture-specific translations in the copies. However, the Builder updates only the default translation file when you make changes to modules or views. It means that your copies of the file will not be automatically updated and you need to avoid making translations until the application is almost ready for deployment.

1. (Optional) Set up the localization of the generated application so that users can choose from any of the following language cultures:

    * German-Germany (de-DE)
    * English-UK (en-GB)
    * English-US (en-US)
    * Spanish-Spain (es-ES)
    * French-France (fr-FR)

    As a result, the respective date, time, and number locale formats are automatically localized by the Builder. You can also manually add culture-specific translations for all messages&mdash;for example, module and view labels.

1. Copy the `translations.default.json` file which is located in `<webapp_directory>/artifacts/translations`.
1. Replace the `default` suffix in the filename with the language culture that you want to add. For example, `translations.fr-FR.json`.
1. Create one file for each language culture that you want to add.
1. Edit the file and add the culture-specific translations.
1. Modify the label and the culture properties.

    ```
    "language": {
      "label": "French",
      "culture": "fr-FR",
      "order": 0
      },
    ```
1. Add the translations for the desired translatable properties.
1. Generate the application by clicking **Generate**. As a result, at runtime the header of the generated application displays a drop-down list with the default and the additionally configured cultures.

## Suggested Links
