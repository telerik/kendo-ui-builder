---
title: Extending .angular-cli.json
page_title: Extending .angular-cli.json - Extension Points - Kendo UI Builder
description: "Learn how to extend the .angular-cli.json file and add your own settings when working with the Kendo UI Builder."
slug: extendingangularcli_kuib
position: 8
---

# Extending .angular-cli.json

For Angular applications, the Builder enables you to extend the existing `.angular-cli.json` file by adding your own settings.

To extend `.angular-cli.json`:

1. Add the `.angular-cli.json` file to the `artifacts` folder on the root application level.
1. Add the necessary settings and `devDependences` to `.angular-cli.json`.

    ```json
    {
      "apps": [
        {
          "styles": [
            "../node_modules/some_vendor/dist/css/styles.css"
          ]
        }
      ]
    }
    ```

1. Restart Webpack in order for the settings to take effect. If you started Webpack by using the **Start** button of the Builder, click **Stop** and then start the server again. If you started Webpack from the console, exit the process and type `npm start` again.

## Suggested Links

* [Overview of Extension Points]({% slug extensionpoints_kuib  %})
