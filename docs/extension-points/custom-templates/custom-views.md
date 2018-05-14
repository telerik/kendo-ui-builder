---
title: Custom Views
page_title: Custom Views - Extension Points - Kendo UI Builder
description: "Learn how to customize the views implement custom themes that are created with the Kendo UI ThemeBuilder in web applications which are generated with the Kendo UI Builder."
slug: customviews_kuib
position: 2
---

# Custom View Templates

This extension point allows you to encapsulate and reuse common logic in the form of a custom view template. Custom Views, just like the built-in views, can have properties.

## Use cases

- If you have several pages with common setup, say a grid and a chart on the side, and only the data sets are different, then you can create a parametrized custom template and reuse it everywhere.

- With custom view templates you can define much more comlex layouts, because you are not restricted by the constraints of the layout builder in the Blank View.

- If you have complex logic that cannot be built by any other means (e.g. Blank View with custom code, and custom components) a custom view is the choise that gives maximum flexibility.

# Structure

Below are described the different pars of a custom view template and their role.

## Schema definition

`<view_name>.json` is the schema file which is used by the Designer to display all available properties and to generate the runtime code. We use json schema v4 standard for it: http://json-schema.org/

The bare minimum that you must supply is:

```json
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "<view_name>",
    "type": "object",
    "name": "<view_name>",
    "description": "<description>",
    "category": "Views",
    "properties": {
    }
}

```

where `<view_name>` and `<description>` are of your choise.

However, you will often need at least one property, say `title`. Then the schema `propertis` object would look like this:

```json
{
    "properties": {
        "title": {
            "type": "string",
            "title": "View Title",
            "description": "The title of the view shown in the header section",
            "default": "Hello",
            "order": 1
        }
    }
}
```

Some of the property descriptor fields are:

- `type` (required) - Designer uses this to render the proper editor for that property. The possible values and the corresponding editors are: `string` (textbox), `boolean` (checkbox), `number` (numeric textbox), `integer` (numeric textbox with step 1), `array` (dropdown list) and `object` (will render nested, expandable level in property grid). There could be a composite type too, e.g. `[ "integer", "null" ]`. Using the correct type constrains the template users and gives them a hit of what type of value is expected.

- `title` (required) - This is the name of the property that the developer will see in the property grid.

- `description` (optional) - This is just a hint in the code. It is not displayed anywhere.

- `default` (optional) - The editor will be auto-populated with this value. Generated code will have default value too.

- `order` (optional) - This is the order in the property grid for that property.

Note that this property description is json schema v4 compliant and you can take advantage of any other field defined in the standard

## Design-time template

The Design-time template is used by the Designer (hence the name). Once created, developers can choose the View from the Views list and use it. It consists of several files, some of which are optional.

- `template.html.ejs` (required) - This is the template that will appear in the Designer canvas. It can be anything from "Hello World" string to a very complex html structure, but since developers can't interact directly with it you would want to keep it simple. The purpose of the design-time template is to display sufficiently close visual representation to what will be generated after. The only way to interact with it is via the exposed properties, which are displayed in the property grid on the right.

To add styling to the html template you can append a `<style></style>` section at the end of the file. A good practice when you write styles here is to "namespace" them with some class with prefix. Example 

```html
<div class="my-custom-view">custom calendar</div>

```

```css
.my-custom-view .date-cell {
    color: blue
}
```

As you can see, the wrapper html element has `my-custom-calendar` class whit which the `.date-cell` selector is namespaced. The namespacing class itself has the `my-` prefix in this case. This is all done to minimize the risk of accidental style overrides in the canvas.

- `options.json.ejs` (required) - Defines template properties which are then used to extend the initial template model. This is suitable when you want to provide more "dynamic" behavior of the template. If the template is simple enough just **provide an empty object `{}`, so the file can be json validated**.

- `generator/index.js` (optional) - It is used to augment the initial model of the template and thus provide additional "dynamic" behavior for the Designer purpose. For instance, some components inside the view can be data bound and you would like to display some sample data otherwise they will be empty and not very representative to the developers. Another thing you can do is to show/hide sertain parts of the template based on the chosen properties. For example, if the `edit` property is `true` you display a form. In this file you have full access to the meta model.

```js
(function(module) {
    'use strict';

    module.exports = {
        augmentModel: function (metaModel) {
        }
    };
})(module);
```

If the template is simple enough you can skip it.

- `<view_name>-large.png` (optional) - when clicking on New View, developers will see this image in the list of possible views. If not provided, a default one will be displayed.

- `<view_name>.png` (optional) - this is the image on the list of views in the left toolbar. If not provided, a default one will be displayed.

## Angular template

The Angular template consists of three mandatory files:

- `__name__.view.base.component.ts.ejs` :
Generator will use this file to generate a "private" code for that custom view. Here is the core logic for it. This file will be re-generated on each app generation. The Generator will automatically create `__name__.view.component.ts` which inherits from that base class. It is generated only once and can be modified by developers afterwords without loosing their changes. This mechanism allows custom view to have an extension point themeselves. A good starting point file is:

```ts
import { Component, Injector, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    <% if (useTemplateUrl) { %>templateUrl: './<%- dasherizedViewName %>.view.component.html'<% } else { %>template: require('./<%- dasherizedViewName %>.view.component.html')<% } %>,
    styleUrls: ['./<%- dasherizedViewName %>.view.component.css']
})
export class <%- classifiedViewName %>ViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {

    public $config: any = <%- viewConfig %>;

    constructor(public injector: Injector) {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }
}

```

The ejs variables in the `@Component` decorator are reserved and you can leave theme as they are. They take care of the proper naming of the class and the imported typescript symbols that are needed.

Another important bit is the `$config` declaration and initialization:

```ts
public $config: any = <%- viewConfig %>;
```

`<%- viewConfig %>` represents the rendered contents of the `config.json.ejs`.

- `config.json.ejs` - It is a suitable way to pass calculated properties from design-time to runtime. Then you can use the `$config` variable to access them from both, the template and the controller. If the template is simple enough just **provide an empty object `{}`, so the file can be json validated**.

- `__name__.view.component.html.ejs`:

This is the html template for that Angular component (rememver, views are Angular components too)

Example:

```html
<div>
    <h1><%- view.title %></h1>

    <kb-calendar [id]="'my-calendar-0'" [config]="configs.calendar"></kb-calendar>
</div>

```

You can access the properties defined in the view schema through the `view` object, e.g. `view.title`. If you change its value from the designer property editor (say you set "My view title") the change will be rendered to the template after Generation. The result would be:

```html
<div>
    <h1>My view title</h1>

    <kb-calendar [id]="'my-calendar-0'" [config]="configs.calendar"></kb-calendar>
</div>

```

`generators/index.js` - This is the place to pre-caluculate some of the view's properties or even augment its model with properties that are not part of the schema definiton. For instance, you might want to populate or calculate view's properties based on the context in which it exists (the view). You have access to the view `context` and the `view` object itself:

```ts
(function (module) {
    'use strict';

    class Generator {
        getViewChildComponents(view) {
        }

        extendViewContext(context) {
        }
    }

    module.exports = () => {
        return new Generator();
    };
})(module);
```


**NOTE** There will be an example with all the concepts explained here in action

## AngularJS template

//TODO

## Suggested Links

* [Custom Components]({% slug customcomponents_kuib %})
