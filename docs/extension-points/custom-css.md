---
title: Custom Styles
page_title: Custom Styles - Extension Points - Kendo UI Builder
description: "Learn how to implement custom styles in web applications generated with the Kendo UI Builder."
slug: customstyles_kuib
position: 4
---

# Custom Styles

The Builder enables you to customize the styles of the generated web project.

<img src="../../images/kuib-custom-css.gif" class="img-responsive" alt="Customizing the Styles in the Kendo UI Builder"/>

## Global Styles

To define custom CSS rules, use either of the following approaches:

* Define any application-wide primitives and styles that you want to reuse across the entire application in the global stylesheet that the Builder generates for each web project.
    * For AngularJS, the global stylesheet is located at `\app\src\styles\app\app.custom.css`.
    * For Angular, the global stylesheet is located at `app/src/app/app.custom.css`.
* Use the stylesheet of the desired view. For more information, refer to the section on [custom view styles](#toc-view-styles).

## Scoped Styles

Certain use-case scenarios require you to scope your CSS to a certain view. The scoping of styles is a custom Kendo UI Builder implementation.

### Benefits

* Avoiding the pollution of the global scope with names.
* Avoiding any conflicting CSS cascades and accidental overrides.
* Achieving encapsulation and modularity.
* Creating smaller and easy-to-read CSS files.

### Specifics

When the Builder generates an application, it outputs a stylesheet file in the folder of each view. Scoped styles are suitable for adding view-specific implementations that are not intended to be used by other views. To directly open each corresponding view stylesheet, use the button that loads a code editor which is located at the top right corner of each view.

The CSS rules that you write within this view stylesheet file, no matter how general they are, do not leak out. For example, if you define the following rule, it will color all links in the current view but any links outside that view will remain unchanged.

```css
a {
    color: green;
}
```

> Global styles that are defined in `app.custom.css` or in custom themes affect individual views.

AngularJS does not support the scoping of view styles by default. When the views are generated, the Builder appends a unique custom attribute to the HTML wrapper of the view which is then automatically used to prefix to every CSS rule. This process occurs during the Webpack compile time.

Angular tries to emulate the Shadow DOM specification which is more sophisticated than the custom scoping approach that the Builder uses for AngularJS applications. When you write a style for a view, Angular applies it to the direct HTML in the view and not to the Angular components inside that view. Each component is scoped by itself which is inconvenient in generated code scenarios. To work around this issue and be able to style both the view and its components by updating the view stylesheet, prefix your own CSS properties with the `:host /deep/` selector. For more information, refer to the [official Angular documentation](https://angular.io/guide/component-styles).

> Angular deprecated the `/deep/` selector and have not provided an alternative so far. Once such an implementation becomes available, you will need to adopt it.

## Additional Customization Approaches

You can additionally customize the styles of your application by using the CSS `list` class property which is available for each view, row, and column. Currently and by default, Kendo UI widgets for AngularJS do not feature a `list` class because each widget is wrapped by a column. In this way, you can unambiguously target the component by its classes.

Many designs and layouts are built around the concept of primitives. These primitives represent CSS classes each of which has a characteristic property. For example, you can have a class that hides the element to which it is attached, a class that adds 20px padding, and so on. You can build the styling of the entire application by adding only classes to the class list. Kendo UI suites are built mainly with primitives and Bootstrap also provides primitives that you can readily reuse.

## Suggested Links

* [Overview of Extension Points]({% slug extensionpoints_kuib %})
