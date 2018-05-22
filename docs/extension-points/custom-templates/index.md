---
title: Overview
page_title: Overview - Custom Templates - Kendo UI Builder
description: "Learn how to customize the views and components by using the custom templates that are supported by the Kendo UI Builder."
slug: customtemplates_kuib
position: 1
---

# Custom Templates Overview

For both the AngularJS and Angular frameworks, the Builder supports templates for implementing [custom views]({% slug customviews_kuib %}) and [custom components]({% slug customcomponents_kuib %}).

All custom templates reside in the `templates` folder at the root application level.

* `<view_name>` or `<component_name>` represent the names of the selected view or component.
* The Builder utilizes the EJS templating engine and generates the `.ejs` files. For more information, refer to the [official EJS diocumentation](http://ejs.co/).

```
templates/
├── components/
|   └── <component_name>/
|       ├── angular/
|       |   ├── config.json.ejs
|       |   └── template.html.ejs
|       ├── angularjs/
|       |   ├── directive.html.ejs
|       |   └── options.json.ejs
|       ├── design-time/
|       |   ├── <component_name>.png
|       |   ├── options.json.ejs
|       |   └── template.html.ejs
|       └── <component_name>.json
└── views/
    └── <view_name>/
        ├── angular/
        |   ├── generator/
        |   |   └── index.js
        |   ├── __name__.view.base.component.ts.ejs
        |   ├── __name__.view.component.html.ejs
        |   └── config.json.ejs
        ├── angularjs/
        |   ├── generator/
        |   |   └── index.js
        |   ├── controller.js.ejs
        |   ├── options.json.ejs
        |   └── template.html.ejs
        ├── design-time/
        |   ├── generator/
        |   |   └── index.js
        |   ├── <view_name>-large.png
        |   ├── <view_name>.png
        |   ├── options.json.ejs
        |   └── template.html.ejs
        └── <view_name>.json
```

## Suggested Links

* [Overview of Extension Points]({% slug extensionpoints_kuib %})
