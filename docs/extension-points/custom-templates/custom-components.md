---
title: Custom Components
page_title: Custom Components - Extension Points - Kendo UI Builder
description: "Learn how to customize the components in Angular and AngularJS in web applications that are generated with the Kendo UI Builder."
slug: customcomponents_kuib
position: 3
---

# Custom Component Templates

This component extension points allow you to encapsulate and reuse common logic in the form of a custom component template.

Similar to the built-in components, the custom components can also have properties.

## Common Scenarios

* If you need a component that does not exist in the toolbox, you can implement your own or use a third-party component.
* If you want to augment the functionality or adjust the appearance of a built-in component, you can wrap it in a custom component.

## Structure

Each custom component template includes the following parts:

* [Schema](#toc-schema)
* [Design-time template](#toc-design-time-template)
* [Runtime template](#toc-runtime-template)
* [Directives](#toc-directives)

### Schema

The `<component_name>.json` file represents the schema file which is used by the Builder to display all available properties and to generate the runtime code. The Builder utilizes the [JSON schema version 4](http://json-schema.org/) as a standard.

The following example demonstrates the minimum setup that you need to apply. `<component_name>`, `<category>`, and `<description>` are optional. `<category>` is used by the toolbox to group the components in a convenient visual manner and accepts any string.

The bare minimum that you must provide is:

```json
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "<component_name>",
    "type": "object",
    "name": "<component_name>",
    "description": "<description>",
    "category": "<category>",
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

The Design-Time template provides options for customizing the design process of the application. Once you create the template, you can choose the view from the **Component** list and use it.

The template consists of several files and some of them are optional. However, the `template.html.ejs` is required and represents the template that appears on the canvas. It can display anything&mdash;for example, a **Hello World** string or a very complex HTML structure. It does not allow you to interact directly with it and that is why it is recommended that you keep it simple. The purpose of the Design-Time template is to display sufficiently close visual representation of the generated application version. To interact with the template, use the exposed properties which are displayed in the property grid on the right.

To add styles to the HTML template, append a `<style></style>` section at the end of the file and "namespace" them with some class with prefix.

```html
<div class="my-custom-calendar">custom calendar</div>

```

```css
.my-custom-calendar .date-cell {
    color: blue
}
```

The wrapper HTML element has the `my-custom-calendar` class whit which the `.date-cell` selector is namespaced. The namespacing class itself has the `my-` prefix in this case which is done to minimize the risk of accidental style overrides in the canvas.

* (Required) `options.json.ejs`&mdash;Defines the template properties which are later used to extend the initial template model. This approach is suitable when you want to provide the template with more dynamic behavior.

    > If the template is simple enough, provide an empty object `{}` so that the file can be JSON validated.

* (Optional) `generator/index.js`&mdash;Used to augment the initial model of the template and, in this way, provide additional dynamic behavior when designing the application. For example, you can bind to data some components that are inside the view and display some sample data. Otherwise, they will be empty and not representative to other developers. Another options for you is to show or hide certain parts of the template based on the selected properties. For example, if the `edit` property is `true`, you display a form. In this file you have full access to the meta model. If the template is simple enough, skip it.
* (Optional) `<component_name>.png`&mdash;Represents the image on the list of the components in the left toolbar. If not provided, a default one will be displayed.

### Runtime Template

* [In Angular](#toc-angular)
* [In AngularJS](#toc-angularjs)

#### Angular

The Angular template consists of the following files:

* (Required) `template.html.ejs`&mdash;Represents the Angular component that will be rendered directly in the view when the user adds it. The definition of the component and controller are provided separately. For example, to create a custom calendar component named `my-calendar`, the template will look similar to the following example.

    ```html
    <my-calendar
        [config]="$config.components.<%- id %>"
        [id]="'<%- id %>'">
    </my-calendar>
    ```

* (Required) `config.json.ejs`&mdash;Provides a suitable way to pass the calculated properties from the design-time to runtime. Then, use the `$config` variable to access them from both the template and the controller.

#### AngularJS

The AngularJS template consists of the following files:

* (Required) `directive.html.ejs`&mdash;Represents the AngularJS directive that will be rendered directly in the view when the user adds it. The definition of the directive and controller are provided separately. For example, to create a custom calendar component named `my-calendar`, the template will look similar to the following example.

    ```html
    <my-calendar
        data-id="<%- id %>"
        data-widget="vm.$components.<%- id %>.widget"
        data-options="vm.$components.<%- id %>.options"
        data-events="vm.$components.<%- id %>.events">
    </my-calendar>
    ```

* (Required) `options.json.ejs`&mdash;Provides a suitable way to pass the calculated properties from design-time to runtime. Then, use `vm.$components.<component_id>.options` to access them from both the template and the controller.

    ```json
    {
        widget: null,
        options: {
            title: "<%- title %>",
            minDate: "<%- minDate %>",
            maxDate: "<%- maxDate %>"
        },
        events: {
            onChange: (e) => {
                <% if (events.onChange) { %>
                    this['<%- events.onChange %>'](e);
                <% } %>
            }
        }
    }
    ```

### Directives

The Builder uses the custom component template to generate code and render it inside the application each time the user drags it from the toolbox to the canvas. At this point, Angular does not relate with the rendered `<my-calendar>` component and you have to define its template and controller. Otherwise, an exception will be thrown.

#### Angular

To define the template and controller:

1. Create a folder inside `app/src/app/shared` next to the `components/` folder and name it, for example, `custom-components`.
1. Inside this folder, create a folder for each custom component. These components are Angular components and apply the specifics of the framework. You can also have an individual `.css` file.

    * In `custom-components/my-calendar/my-calendar.component.html`:

        ```html
        <h2>{{name}} - {{config.min}}</h2>
        ```

    * In `custom-components/my-calendar/my-calendar.component.ts`:

        ```ts
        import { Component, Input } from '@angular/core';

        @Component({
            selector: 'my-calendar',
            templateUrl: './my-calendar.component.html'
        })
        export class MyCalendarComponent {
            @Input() public config;
            public name: string = 'My Calendar';
        }
    ```

1. Register this component in the `shared` module `config` file so that Angular associates it. Each module that is generated by the Builder, including `shared`, is extendable. Locate the `shared.module.ts` file and add your component.

    ```ts
    /////////////////////////////////////////////////////
    // Add your custom code here.
    // This file and any changes you make to it are preserved every time the app is generated.
    /////////////////////////////////////////////////////
    import { NgModule } from '@angular/core';

    import { config } from './shared.config';

    // You can modify or replace module config here
    import { MyCalendarComponent } from './custom-components/my-calendar/my-calendar.component'; // import the component from the folder you put its files

    config.declarations.push(MyCalendarComponent); // push it to the declarations array
    config.exports.push(MyCalendarComponent); // don't forget to export your component so it can be used by other modules too

    @NgModule(config)
    export class SharedModule { }
    ```

#### AngularJS

Navigate to `app/src/scripts/extensions` and create a folder for each custom directive. In this folder, the `template.html` and `index.js` files for the directive will reside. The following example demonstrates that the template can also wrap a Kendo UI directive inside.

* In `index.js`:

    ```js
    'use strict';

    import template from './template.html';

    function directive() {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                id: '@',
                widget: '=',
                options: '=',
                events: '=',
            },
            transclude: true,
            controller: function() {
                var vm = this;
            },
            controllerAs: 'vm',
            templateUrl: template
        };
    }

    export default directive;
    ```

* In `template.html`:

    ```html
    <div
        id="{{vm.id}}"
        kendo-calendar="vm.widget"
        k-options="vm.options"
        k-on-change="vm.events.onChange(kendoEvent)">
    </div>
    ```

## Suggested Links

* [Overview of Extension Points]({% slug extensionpoints_kuib %})
