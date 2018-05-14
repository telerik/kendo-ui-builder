---
title: Extending package.json
page_title: Extending package.json - Extension Points - Kendo UI Builder
description: "Learn how to extend package.json and add your own packages"
slug: extendingpackages_kuib
position: 6
---

# Extending package.json

KendoUIBuilder enables you to extend the existing package.json with your own packages. To do so you will only need to add `package.json` file in the `artifacts` folder at the application root. Then you can start adding dependencies and devDependences in it e.g.:

```json
{
    "dependencies": {
       "md5": "^2.2.1"
    }
}
```

This file will be merged with `app/package.json` and the dependencies will be installed when you hit the "Generate" button in the Designer.

## Suggested Links

* [Demos on Customization]({% slug extensionpoints_kuib %})
