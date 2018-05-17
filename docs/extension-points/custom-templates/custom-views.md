---
title: Custom Views
page_title: Custom Views - Extension Points - Kendo UI Builder
description: "Learn how to customize the views when working with the Kendo UI Builder."
slug: customviews_kuib
position: 2
---

# Custom View Templates

The view extension points allow you to encapsulate and reuse common logic in the form of a custom view template.

Similar to the built-in views, the custom views can also have properties.

## Common Scenarios

* If you have several pages with common setup&mdash;for example, a Grid and a Chart on the side&mdash;and only the data sets are different, you can create a parametrized custom template and reuse it everywhere.
* With custom view templates you can define much more complex layouts because you are not restricted by the constraints of the layout builder in the Blank View.
* If you have complex logic that cannot be built by any other means&mdash;for example, a Blank view with custom code and custom components&mdash;a custom view provides the maximum flexibility.

## Structure

Each custom view template includes the following parts:

* [Schema](#toc-schema-definition)
* [Design-time template](#toc-design-time-template)
* [Angular template](#toc-angular-template)

### Schema Definition

The `<view_name>.json` file represents the schema file which is used by the Builder to display all available properties and to generate the runtime code. The Builder utilizes the [JSON schema version 4](http://json-schema.org/) as a standard.

The following example demonstrates the minimum setup that you need to apply. `<view_name>` and `<description>` are optional.

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

Often, the projects require the setting of at least one property&mdash;for example, a `title`&mdash;which you need to include in the `properties` object of the schema.

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

Some of the `properties` descriptor fields are:

* (Required) `type`&mdash;Renders the proper editor for that property. The possible values and the corresponding editors are `string` (TextBox), `boolean` (CheckBox), `number` (Numeric Text Box), `integer` (Numeric Text Box with one step), `array` (Drop Down List), and `object` (renders nested, expandable levels in the property grid). The Builder also supports composite types too&mdash;for example, `[ "integer", "null" ]`. Using the correct type provides template users with a hint of what value type is expected.
* (Required) `title`&mdash;Represents the name of the property that will be displayed in the property grid.
* (Optional) `description`&mdash;Represents a hint in the code that is displayed nowhere else.
* (Optional) `default`&mdash;Auto-populates the editor too. The generated code will have a default value too.
* (Optional) `order`&mdash;Defines the order in the property grid for that property.

> This `properties` field description is compliant with the JSON schema version 4. You can also use any other field that is defined in the standard.

### Design-Time Template

The Design-Time template provides options for customizing the design process of the application. Once you create the template, you can choose the view from the **Views** list and use it.

The template consists of several files and some of them are optional. However, the `template.html.ejs` is required and represents the template that appears on the canvas. It can display anything&mdash;for example, a **Hello World** string or a very complex HTML structure. It does not allow you to interact directly with it and that is why it is recommended that you keep it simple. The purpose of the Design-Time template is to display sufficiently close visual representation of the generated application version. To interact with the template, use the exposed properties which are displayed in the property grid on the right.

To add styles to the HTML template, append a `<style></style>` section at the end of the file and "namespace" them with some class with prefix.

```html
<div class="my-custom-view">custom calendar</div>

```

```css
.my-custom-view .date-cell {
    color: blue
}
```

The wrapper HTML element has the `my-custom-calendar` class whit which the `.date-cell` selector is namespaced. The namespacing class itself has the `my-` prefix in this case which is done to minimize the risk of accidental style overrides in the canvas.

* (Required) `options.json.ejs`&mdash;Defines the template properties which are later used to extend the initial template model. This approach is suitable when you want to provide the template with more dynamic behavior.

    > If the template is simple enough, provide an empty object `{}` so that the file can be JSON validated.

* (Optional) `generator/index.js`&mdash;Used to augment the initial model of the template and, in this way, provide additional dynamic behavior when designing the application. For example, you can bind to data some components that are inside the view and display some sample data. Otherwise, they will be empty and not representative to other developers. Another options for you is to show or hide certain parts of the template based on the selected properties. For example, if the `edit` property is `true`, you display a form. In this file you have full access to the meta model. If the template is simple enough, skip it.

    ```js
    (function(module) {
        'use strict';

        module.exports = {
            augmentModel: function (metaModel) {
            }
        };
    })(module);
    ```

* (Optional)`<view_name>-large.png` &mdash;Represents the image in the possible views when you click **New View**. If it is not provided, a default image is displayed.
* (Optional) `<view_name>.png`&mdash;Represents the image on the list of views in the left toolbar. If not provided, a default one will be displayed.

### Angular Template

The Angular template consists of the following mandatory files:

* `__name__.view.base.component.ts.ejs`&mdash;Used by the Builder to generate a "private" code for that custom view. This file is re-generated on each application generation. The generator automatically creates a `__name__.view.component.ts` file which inherits from that `base` class. `__name__.view.component.ts` is generated only once and can be modified later on without loosing any current changes. This mechanism allows the custom views to have extension points themselves.

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

    The `ejs` variables in the `@Component` decorator are reserved and you can leave them as they are. They handle the proper naming of the class and the imported typescript symbols that are needed. The `$config` declaration and initialization is also important.

    ```ts
    public $config: any = <%- viewConfig %>;
    ```

    The `<%- viewConfig %>` represents the rendered content of the `config.json.ejs` file.

* `config.json.ejs`&mdash;Represents a suitable way to pass calculated properties from design-time to runtime. Then, you can use the `$config` variable to access them from both the template and the controller.

     > If the template is simple enough, provide an empty object `{}` so that the file can be JSON validated.

* `__name__.view.component.html.ejs`&mdash;Represents the HTML template for that Angular component (views are Angular components too).

    ```html
    <div>
        <h1><%- view.title %></h1>

        <kb-calendar [id]="'my-calendar-0'" [config]="configs.calendar"></kb-calendar>
    </div>

    ```

    You can access the properties that are defined in the view schema through the `view` object&mdash;for example, `view.title`. If you change its value from the property editor, for example, if you want to set `My view title`, the change will be rendered to the template after the generation of the application. The result looks similar to the following example.

    ```html
    <div>
        <h1>My view title</h1>

        <kb-calendar [id]="'my-calendar-0'" [config]="configs.calendar"></kb-calendar>
    </div>

    ```

    The `generators/index.js` represents the place to pre-calculate some of the view properties or augment its model with properties that are not part of the schema definition. For example, you might want to populate or calculate the view properties based on the context in which the view exists. You have access to the view `context` and the `view` object itself.

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

### AngularJS Template

The AngularJS template consists of several files, some of which are mandatory:

- (Required) `controller.js.ejs` &mdash; It is the actual AngularJS controller that defines the logic and everighing you know about AngularJS applies here.

```js
class BaseController {
    constructor($scope, $injector) {
    }
}

export default BaseController;
```

The constructor receives `$scope` and `$injector`. You can use the `$scope` to handle AngualarJS events for example. It's convenient to attach the `$scope` to the `this` so it can be available to methods outside the `constructor`, e.g.:

```js
class BaseController {
    constructor($scope, $injector) {
        this.$scope = $scope;
    }

    $onInit() {
        this.$scope.$on('$includeContentLoaded', () => {
            // do something
        });
    }
}

export default BaseController;
```

Through the `$injector` you can inject AngularJS or your own services. For example:

```js
constructor($scope, $injector) {
    this.$compile = $compile;
    this.$translate = $injector.get('$translate');
    this.myService = $injector.get('myService');
}
```

If you want to make a property available to the `view` attach it to the `this` object.

```js
constructor($scope, $injector) {
    this.myModel = {
        title: 'some title'
    };
}
```

Then, it becomes available through the `vm` object in the `view`:

```html
<h2 ng-bind="vm.myModel.title"></h2>
```

> The `vm` name is defined by the Builder in the `routes.js` for each `view`.

```js
controllerAs: 'vm'
```

> At the end, don't forget to export the controller

So far we defined the `Base` controller template. This means that the Builder will re-generate the produced source file on each generation and if someone touches it the changes will be lost. The Builder allows custom veiws to be extensible too, by generating an additional `controller.public.js`. This file is created only once and can be modified by developers afterwards.

- (Required) `options.json.ejs` These are the options from the schema definition plus whatever other options you need to define at generation time. For example, suppose that the `title`, `pageable`, `editable`, `selectable`, `filterable`, `events` and `onRowSelect` were previously defined in the schema. Then, a possible options definition might look like this:

```
{
    title: '<%= title %>',
    options: {
        pageable: <%= pageable %>,
        <% if (editable !== "ReadOnly") { -%>
        messages: {
            commands: {}
        },
        <% } -%>
        editable: '<%= editable.toLowerCase(); %>',
        selectable: true,
        filterable: <%= filterable %>
    },
    events: {
        onRowSelect: (e) => {
            <% if (events.onRowSelect) { -%>
                 this['<%- events.onRowSelect %>'](e);
            <% } -%>
        }
    }
}
```

As you can see, along with the normal properties, you can have condition, based on which you render other properties.

The options defined in this file are available in the controller template through the `options` variable so you can pass them to a variable (say `$model`)

```js
constructor($scope, $injector) {
    this.$model = <%- options %>;
}
```

The `$model` is attached to the `this` so you can access it in the html template and in other functions in the controller.

- (Required) `template.html.ejs` This is the AngularJS view and everything you know about AngularJS applies here too. As mentioned above, you can access controller properties through the `vm` object.

- (Optional) `generator/index.js` This is the place to augment the initial custom view model. This is optional and rarely needed. But it's useful if you need to calculate or populate values at generation time that will be then passed to the generated source code.

```js
(function(module) {
    'use strict';

    class Generator {
        constructor(mb, pretty) {
            this.modelBuilder = require('./model-builder');
            this.pretty = pretty;
        }

        /*
         * Adds or removes properties from a meta model
         * @param {object} metaModel - The metaModel being processed, this could be either view or ui component.
         * @param {string} metaPath - The path to the folder containing the meta information for the application.
         */
        augmentModel(metaModel, metaPath) {
        }

        getTranslation(view) {
        }
    }

    module.exports = (mb, pretty) => {
        return new Generator(mb, pretty);
    };

})(module);

```

From the `augmentModel` you have full access to the `metaModel` and the `metaPath`.

## Suggested Links

* [Custom Components]({% slug customcomponents_kuib %})
* [Overview of Extension Points]({% slug extensionpoints_kuib %})
