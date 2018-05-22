---
title: Extending package.json
page_title: Extending package.json - Extension Points - Kendo UI Builder
description: "Learn how to extend the package.json file and add your own packages when working with the Kendo UI Builder."
slug: extendingpackages_kuib
position: 6
---

# Extending package.json

The Builder enables you to extend the existing `package.json` file by adding your own packages.

To extend `package.json`:

1. Add the `package.json` file to the `artifacts` folder on the root application level.
1. Add the necessary `dependencies` and `devDependences` to `package.json`.

    ```json-no-run
    {
        "dependencies": {
           "md5": "^2.2.1"
        }
    }
    ```

1. Click **Generate**. As a result, the custom `package.json` file is merged with `app/package.json` and the defined dependencies are installed.

## Suggested Links

* [Overview of Extension Points]({% slug extensionpoints_kuib %})
