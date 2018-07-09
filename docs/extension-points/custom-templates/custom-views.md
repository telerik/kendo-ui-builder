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

* [Schema definition](#toc-schema-definition)
* [Design-time template](#toc-design-time-template)
* [Angular template](#toc-angular-template)
* [AngularJS template](#toc-angularjs-template)

### Schema Definition

The `<view_name>.json` file represents the schema file which is used by the Builder to display all available properties and to generate the runtime code. The Builder utilizes the [JSON schema version 4](http://json-schema.org/) as a standard.

The following example demonstrates the minimum setup that you need to apply. `<view_name>` and `<description>` are optional.

```json-no-run
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

```json-no-run
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

```html-no-run
<div class="my-custom-view">custom calendar</div>

```

```css-no-run
.my-custom-view .date-cell {
    color: blue
}
```

The wrapper HTML element has the `my-custom-calendar` class whit which the `.date-cell` selector is namespaced. The namespacing class itself has the `my-` prefix in this case which is done to minimize the risk of accidental style overrides in the canvas.

* (Required) `options.json.ejs`&mdash;Defines the template properties which are later used to extend the initial template model. This approach is suitable when you want to provide the template with more dynamic behavior.

    > If the template is simple enough, provide an empty object `{}` so that the file can be JSON validated.

* (Optional) `generator/index.js`&mdash;Used to augment the initial model of the template and, in this way, provide additional dynamic behavior when designing the application. For example, you can bind to data some components that are inside the view and display some sample data. Otherwise, they will be empty and not representative to other developers. Another options for you is to show or hide certain parts of the template based on the selected properties. For example, if the `edit` property is `true`, you display a form. In this file you have full access to the meta model. If the template is simple enough, skip it.

    ```js-no-run
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

    ```ts-no-run
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

    ```ts-no-run
    public $config: any = <%- viewConfig %>;
    ```

    The `<%- viewConfig %>` represents the rendered content of the `config.json.ejs` file.

* `config.json.ejs`&mdash;Represents a suitable way to pass calculated properties from design-time to runtime. Then, you can use the `$config` variable to access them from both the template and the controller.

     > If the template is simple enough, provide an empty object `{}` so that the file can be JSON validated.

* `__name__.view.component.html.ejs`&mdash;Represents the HTML template for that Angular component (views are Angular components too).

    ```html-no-run
    <div>
        <h1><%- view.title %></h1>

        <kb-calendar [id]="'my-calendar-0'" [config]="configs.calendar"></kb-calendar>
    </div>

    ```

    You can access the properties that are defined in the view schema through the `view` object&mdash;for example, `view.title`. If you change its value from the property editor, for example, if you want to set `My view title`, the change will be rendered to the template after the generation of the application. The result looks similar to the following example.

    ```html-no-run
    <div>
        <h1>My view title</h1>

        <kb-calendar [id]="'my-calendar-0'" [config]="configs.calendar"></kb-calendar>
    </div>

    ```

    The `generators/index.js` represents the place to pre-calculate some of the view properties or augment its model with properties that are not part of the schema definition. For example, you might want to populate or calculate the view properties based on the context in which the view exists. You have access to the view `context` and the `view` object itself.

    ```ts-no-run
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

The AngularJS template consists of the following files:

* (Required) `controller.js.ejs`&mdash;Represents the actual AngularJS controller that defines the logic and applies all AngularJS specifics.

    ```js-no-run
    class BaseController {
        constructor($scope, $injector) {
        }
    }

    export default BaseController;
    ```

    The constructor receives `$scope` and `$injector`. You can use the `$scope` to handle AngualarJS events, for example. For convenience, attach `$scope` to `this` so that it becomes available to methods outside the `constructor`.

    ```js-no-run
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

    To inject AngularJS or your own services, use `$injector`.

    ```js-no-run
    constructor($scope, $injector) {
        this.$compile = $compile;
        this.$translate = $injector.get('$translate');
        this.myService = $injector.get('myService');
    }
    ```

    To make a property available to `view`, attach the property to the `this` object.

    ```js-no-run
    constructor($scope, $injector) {
        this.myModel = {
            title: 'some title'
        };
    }
    ```

    As a result, the property becomes available through the `vm` object in `view`.

    ```html-no-run
    <h2 ng-bind="vm.myModel.title"></h2>
    ```

    > The Builder defines the `vm` name for each `view` in the `routes.js` file.

    ```js-no-run
    controllerAs: 'vm'
    ```

    > Remember to export the controller in the end.

    So far, the `Base` controller template has been defined which means that the Builder will re-generate the produced source file on each generation and if users make any changes to the source file, these changes will be lost. The Builder also allows you to extend custom views by generating an additional `controller.public.js` file which is created only once and you can further modify it.

* (Required) `options.json.ejs`&mdash;Contains the options from the schema definition together with whatever other options you need to define at generation time. For example, if  `title`, `pageable`, `editable`, `selectable`, `filterable`, `events`, and `onRowSelect` were previously defined in the schema, you can use the following options definition.

    ```js-no-run
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

    Along with the normal properties, you can have a condition based on which you render other properties.

    The options that are defined in this file are available in the controller template through the `options` variable. As a result, you can pass them to a variable, for example, `$model`.

    ```js-no-run
    constructor($scope, $injector) {
        this.$model = <%- options %>;
    }
    ```

    The `$model` variable is attached to the `this` object and you can access it in the HTML template and in other functions of the controller.

* (Required) `template.html.ejs`&mdash;Represents the AngularJS view and applies all AngularJS specifics. You can access the controller properties through the `vm` object.

* (Optional) `generator/index.js`&mdash;Represents the place where you can augment the initial custom view model. This approach is optional and rarely needed, but is useful for calculating or populating values at generation time which will then be passed to the generated source code.

    ```js-no-run
    (function(module) {
        'use strict';

        class Generator {
            constructor(mb, pretty) {
                this.modelBuilder = require('./model-builder');
                this.pretty = pretty;
            }

            /*
             * Adds or removes properties from a meta model.
             * @param {object} metaModel - The metaModel being processed, this could be either a view or a UI component.
             * @param {string} metaPath - The path to the folder with the meta information for the application.
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

    The `augmentModel` provides you with full access to `metaModel` and `metaPath`.

## Suggested Links

* [Custom Components]({% slug customcomponents_kuib %})
* [Overview of Extension Points]({% slug extensionpoints_kuib %})
