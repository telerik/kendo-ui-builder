---
title: Overview
page_title: Overview - Custom Templates - Kendo UI Builder
description: ""
slug: customtemplates_kuib
position: 1
---

# Custom Templates Overview

All custom templates (views and components) reside in the `templates` folder at the application root folder. The structure is the following:

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
        ├── design-time/
        |   ├── generator/
        |   |   └── index.js
        |   ├── <view_name>-large.png
        |   ├── <view_name>.png
        |   ├── options.json.ejs
        |   └── template.html.ejs
        └── <view_name>.json
```

where `<view_name>`/`<component_name>` is the name of choise of your view/component.

Notice the `.ejs` files. KendoUIBuilder Generator uses the ejs templating engine, you can learn more about it from here: http://ejs.co/.

KendoUIBuilder supports two types of templates for each framework - Views and Components. They will be regarded in details below