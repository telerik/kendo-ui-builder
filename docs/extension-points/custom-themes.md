---
title: Custom Themes
page_title: Custom Themes - Extension Points - Kendo UI Builder
description: "Learn how to implement custom themes that are created with the Kendo UI ThemeBuilder in web applications which are generated with the Kendo UI Builder."
slug: customthemes_kuib
position: 5
---

# Custom Themes

Some scenarios might require greater changes to the look of your application so that you can fit on your organization brand.

## Overview

To avoid the complete overriding of all built-in styles, use the [Progress<sup>®</sup> Sass ThemeBuilder](http://themebuilder.telerik.com/) online tool. To create and generate custom themes for Angular applications, use the [ThemeBuilder for Angular](http://themebuilder.telerik.com/kendo-ui). To create and generate custom themes for AngularJS applications, use the [ThemeBuilder for AngularJS](http://themebuilder.telerik.com/kendo-angular-ui).

The ThemeBuilder enables you to tweak the theme parameters and export them as a `.css` file. This `.css` file represents the custom theme which you can then import through the interface of the Builder. To apply the theme, generate the application.

You can use custom themes in conjunction with the `app.custom.css` file and the CSS of the view. However, avoid the manual editing of the custom theme. To tweak it, import it back in the ThemeBuilder and re-export it. Override the rules only if you come across a ThemeBuilder limitation.

When you download a theme from the ThemeBuilder, you get an archive with the following files:
* `all.css`&mdash;The `all.css` file is the file that you import in the Builder.
* `variables.scss`&mdash;The `variables.scss` file is the file you re-import in the ThemeBuilder if you want to tweak a theme again.

## Specific Usage of Custom Styling Approaches

The Builder provides the following custom styling approaches which aim at handling different cases:  

* Custom themes&mdash;Define the appearance and metrics of Kendo UI components.
* The [`app.custom.css`]({% slug customstyles_kuib %}) file&mdash;Intended for application-wide styles.
* The [view styles]({% slug customstyles_kuib %})&mdash;Intended for scoping the styles which concern a specific view type.

>The `app.custom.css` and the view styles approaches define the layout of the application not the appearance or metrics of the components. You can use these approaches to define the spacing between elements, show, hide, or position elements, and so on.

## Suggested Links

* [Overview of Extension Points]({% slug extensionpoints_kuib %})
* [Generating Custom Themes for Angular](http://themebuilder.telerik.com/kendo-angular-ui)
* [Generating Custom Themes for AngularJS](http://themebuilder.telerik.com/kendo-ui)
