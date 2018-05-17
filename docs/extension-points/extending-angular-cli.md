---
title: Extending package.json
page_title: Extending package.json - Extension Points - Kendo UI Builder
description: "Learn how to extend the package.json file and add your own packages when working with the Kendo UI Builder."
slug: extendingangularcli_kuib
position: 8
---

# Extending `.angular-cli.json`

The Builder enables you to extend the existing `.angular-cli.json` file by adding your own settings.

To extend it:

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

> You need to restart Webpack so the settings will take effect. If you started it via the `Start` button from KUIB, just press `Stop` and start the server again. If you started it from the console, exit the process and type `npm start` again.

## Suggested Links

* [Overview of Extension Points]({% slug extensionpoints_kuib  %})
