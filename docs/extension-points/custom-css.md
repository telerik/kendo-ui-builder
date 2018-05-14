---
title: Custom Styles
page_title: Custom Styles - Extension Points - Kendo UI Builder
description: "Learn how to implement custom styles in web applications generated with the Kendo UI Builder."
slug: customstyles_kuib
position: 4
---

# Custom Styles

The Builder enables you to customize the styles of the generated web project.

## Global Styles

There are two options to define custom CSS rules<sup>2</sup>. The first and most obvious is in the global style sheet which every KUIB app has already generated for you. For AngularJS this is `\app\src\styles\app\app.custom.css` and for Angular `app/src/app/app.custom.css`. This is the place to define styles that you want to reuse across the entire application. If you have app-wide primitives, define them here.

The other option is to use the view's style sheet. See below.

## View styles

Global styles play important role in app styling, but sometimes you need to “scope” your CSS to certain view. The benefits of doing this are:
1. You don’t pollute the global scope with names
2. You avoid conflicting CSS cascades and accidental overrides
3. Encapsulation and Modularity
4. Smaller and easier to read CSS files

When you generate an application, you get a style sheet file in each view’s folder. Every CSS rule that you write there will never leak out of it no matter how general it is. For instance, if you define rule like this:

```css
a {
    color: green;
}
```

it will color all links in the current view, but never the links outside of it. 

Use scoped styles every time you need to implement something view specific, that will never be reused by other views.

**NOTE**: Styles defined in `app.custom.css` or in custom themes still have effect on the individual views (in the case of AngualrJS, read below).

AngularJS by default doesn't support view styles scoping, this is a custom KUIB implementation. When the views are generated the Generator appends a custom unique attribute in the view's HTML wrapper which is then used to prefix every CSS rule with it. This is done automatically at Webpack compile time and you don't need to worry about the whole mechanism. However you need to know an important difference between this behavior and the one that cames with Angular.

Angular treis to emulate the Shadow DOM specification, which is more sophisticated than the custom scoping approach that we use for AngularJS apps. The big difference is that when you write a style for a view it applies for the direct HTML in the view, and not the Angular components inside. Every components is scoped by itself, which is a bit inconvenient in generated code scenarios. In order to workaround this and actually be able to target everything in the view from the view's style sheet you need to prefix your own CSS properties with the `:host /deep/` selector. More on the matter you can find on Angular's site: https://angular.io/guide/component-styles.

Please also note that Angular deprecated the `/deep/` selector but since then they didn't provide any alternative. When such is implemented from their side you will need to adopt it.

**HINT**: You can easily open the corresponding view style sheet directly from the Designer. Each view has a button at the top right corner which opens a code editor.

## The "CSS Class List" property

The CSS Class List property is a simple but essential and powerful tool for additional style customization. Every View, Row and Column has this property. Widgets don’t have this property because, by design, each widget is wrapped by a column, thus can be unambiguously targeted by its classes (could be changed in future all widgets to have class list).

Many designs and layouts are built around the concept of primitives. These primitives are simply CSS classes that each has some characteristic property. For instance, you can have a class that hides the element on which it is attached, another that adds 20px padding and so on. You can build your entire app styling by adding only classes in the class list. Actually, Kendo is built mainly with primitives. Bootstrap also provides many useful primitives that you can reuse right away.


## Suggested Links

* [Demos on Customization]({% slug extensionpoints_kuib %})
