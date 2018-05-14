---
title: Custom Components
page_title: Custom Components - Extension Points - Kendo UI Builder
description: "Learn how to customize the components in Angular and AngularJS in web applications that are generated with the Kendo UI Builder."
slug: customcomponents_kuib
position: 3
---

# Custom Component Templates

This extension point allows you to encapsulate and reuse common logic in the form of a custom component template. Custom components, just like the built-in components, can have properties.

## Use cases

- If you need a component that doesn't exist in the toolbox you can implement your own or use third-party one

- If you want to augment the fuctionality or adjust the appearance of a built-in component, you can wrap it in a custom component

# Structure

Below are described the pars of a custom component template and their role.

## Schema definition

`<component_name>.json` is the schema file which is used by the Designer to display all available properties and to generate the runtime code. We use json schema v4 standard for it: http://json-schema.org/

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

where `<component_name>`, `<category>` and `<description>` are of your choise. The `<category>` is used by the toolbox to group component in a convenient visual maner. It could be any string.

However, you will often need at least one property, say `title`. Then the schema `properties` object would look like this:

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

- `type` (required) - Designer uses this to render the proper editor for that property. The possible values and the corresponding editors are: `string` (textbox), `boolean` (checkbox), `number` (numeric textbox), `integer` (numeric textbox with step 1), `array` (dropdown list) and `object` (will render nested, expandable level in property grid). There could be a composite type too, e.g. `[ "integer", "null" ]`. Using the correct type constrains the Designer users and gives them a hit of what type of value is expected.

- `title` (required) - This is the name of the property that the developer will see in the property grid.

- `description` (optional) - This is just a hint in the code. It is not displayed anywhere.

- `default` (optional) - The editor will be auto-populated with this value. Generated code will have default value too.

- `order` (optional) - This is the order in the property grid for that property.

Note that this property description is json schema v4 compliant and you can take advantage of any other field defined in the standard

## Design-time template

The Design-time template is used by the Designer (hence the name). Once created, developers can choose the componet from the toolbox and use it. It consists of several files, some of which are optional.

- `template.html.ejs` (required) - This is the template that will appear in the Designer canvas. It can be anything, from simple string to a very complex html structure, but since developers can't interact directly with it you would want to keep it simple. The purpose of the design-time template is to display sufficiently close visual representation to what will be generated after. The only way to interact with it is via the exposed properties, which are displayed in the property grid on the right. 

To add styling to the html template you can append a `<style></style>` section at the end of the file. A good practice when you write styles here is to "namespace" them with some class with prefix. Example 

```html
<div class="my-custom-calendar">custom calendar</div>

```

```css
.my-custom-calendar .date-cell {
    color: blue
}
```

As you can see, the wrapper html element has `my-custom-calendar` class whit which the `.date-cell` selector is namespaced. The namespacing class itself has the `my-` namespacing prefix. This is all done to minimize the risk of accidental style overrides in the canvas.

- `options.json.ejs` (required) - Defines template properties which are then used to extend the initial template model. This is suitable when you want to provide more "dynamic" behavior of the template. If the template is simple enough just **provide an empty object `{}`, so the file can be json validated**.

- `generator/index.js` (optional) - It is used to augment the initial model of the template and thus provide additional "dynamic" behavior. For instance, the component can be data bound and you would like to display some sample data otherwise it will be empty and not very representative to the developers. Another thing you can do is to show/hide sertain parts of the template based on the chosen properties. For example, if the `edit` property is `true` you display a form. If the template is simple enough you can skip this file

- `<component_name>.png` (optional) - this is the image on the list of components in the toolbox. If not provided, a default one will be displayed.

## Runtime template

### Angular

The Angular template consists of two mandatory files:

- `template.html.ejs` :
This template file represents the Angular component that will be rendered directly in the view, when someone add it. The definition of the component and controller themselves are provided separately (as you will see later). For example, let's say you want to create a custom calendar component named `my-calendar`. Then the template might look like this:

```html
<my-calendar
    [config]="$config.components.<%- id %>"
    [id]="'<%- id %>'">
</my-calendar>
```
- `config.json.ejs` - It is a suitable way to pass calculated properties from design-time to runtime. Then you can use the `$config` variable to access them from both, the template and the controller.

### AngularJS

The AngularJS template consists of two mandatory files:

- `directive.html.ejs` This template file represents the AngularJS directive that will be rendered directly in the view, when someone add it. The definition of the directive and controller themselves are provided separately (as you will see later). For example, let's say you want to create a custom calendar component named `my-calendar`. Then the template might look like this:

```html
<my-calendar
    data-id="<%- id %>"
    data-widget="vm.$components.<%- id %>.widget"
    data-options="vm.$components.<%- id %>.options"
    data-events="vm.$components.<%- id %>.events">
</my-calendar>
```

- `options.json.ejs` It is a suitable way to pass calculated properties from design-time to runtime. Then you can use `vm.$components.<component_id>.options` to access them from both, the template and the controller.

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

## Component/Directive definition

The custom component template is used by the Designer to generate code and render it inside the app everytime someone drags it from the toolbox to the Designer canvas. At this point, the rendered `<my-calendar>` component doesn't mean anything to angular and you need to define its template and contrller, otherwise an exception will be thrown.

### Angular

In order to do so, create a folder inside `app/src/app/shared`, next to the `components/` folder, called `custom-components` (or any name of your choice). Inside this folder, create a folder for each custom component. These components are Angular components and everything you know about Angular applies for them. Example:

`custom-components/my-calendar/my-calendar.component.html`:

```html
<h2>{{name}} - {{config.min}}</h2>
```

`custom-components/my-calendar/my-calendar.component.ts`:

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
Of course you can have a separate css file too.

Then you need to register this component in the `shared` module config, so Angular can put it into play. Each module generated by KUIB is extendable, including the `shared` module. Locate the `shared.module.ts` file and add your component:

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

### AngularJS

Navigate to `app/src/scripts/extensions` and create a folder for each custom directive. In this folder will reside the `template.html` and `index.js` for the directive. For example:

- `index.js`

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

- `template.html`

```html
<div
    id="{{vm.id}}"
    kendo-calendar="vm.widget"
    k-options="vm.options"
    k-on-change="vm.events.onChange(kendoEvent)">
</div>
```

As you can see, in this specific example the template wraps a kendo directive inside, just to show that this is also possible.

## Suggested Links

* [Custom Components]({% slug customcomponents_kuib %})
