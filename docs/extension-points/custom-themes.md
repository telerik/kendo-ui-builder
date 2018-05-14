---
title: Custom Themes
page_title: Custom Themes - Extension Points - Kendo UI Builder
description: "Learn how to implement custom themes that are created with the Kendo UI ThemeBuilder in web applications which are generated with the Kendo UI Builder."
slug: customthemes_kuib
position: 5
---

# Custom Themes

Sometimes you need to make bigger changes to the look of your app in order to fit your organization brand. In this case you don't want to override all the built-in styles because it's tedious and very error-prone work. The proper way to do it is to use Kendo ThemeBuilder online tool. With this tool, you can easily tweak the theme parameters and then export it as CSS file. This CSS file represents your custom theme which you can then import through KUIB's interface. After you generate, the theme applies.

To import a theme go to the app settings

You can use custom themes in conjunction with `app.custom.css` and view's CSS. However, we don't recommend to manually edit the custom theme. If you want to tweak it you should import it back in the ThemeBuilder and re-export it. If you hit a limitation with ThemeBuilder, only then you should override.

When you download a theme from ThemeBuilder you get archive with two files, `all.css` and `variables.scss`. `all.css` is what you import in KUIB. `variables.scss` is what you re-import in ThemeBuilder if you want to tweak something again.

There is strict distinction between the purpose of these 3 major style components. 

- Custom theme defines the Appearance and Metrics of Kendo widgets
- [app.custom.css]({% slug customstyles_kuib %}) is for application-wide styles
- [View Styles]({% slug customstyles_kuib %}) is for scoped styles, concerning only this type of view

The last two should be only used to define the app layout, never the widgets appearance or metrics! You can use them to define spacing between elements, show/hide things, position elements and so on. Let the theme control the look and feel of the widgets.

To create and generate custom themes for Angular applications, use the [ThemeBuilder for Angular](http://themebuilder.telerik.com/kendo-ui). To create and generate custom themes for AngularJS applications, use the [ThemeBuilder for AngularJS](http://themebuilder.telerik.com/kendo-angular-ui).

## Suggested Links

* [Demos on Customization]({% slug extensionpoints_kuib %})
* [Generating Custom Themes for Angular](http://themebuilder.telerik.com/kendo-angular-ui)
* [Generating Custom Themes for AngularJS](http://themebuilder.telerik.com/kendo-ui)
