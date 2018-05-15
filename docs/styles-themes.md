---
title: Styling & Themes
page_title: Styling & Themes - Documentation - Kendo UI Builder
description: "Learn about the styling options and the themes provided by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: stylingthemesoverview_kuib
position: 7
---

# Styling & Themes Overview

The Kendo UI Builder delivers a set of predefined themes and supports the import of custom themes.  

> Within the same application, you cannot simultaneously use predefined and custom themes. This means that for each individual web project you can either use any of the predefined themes that are supported by the Kendo UI Builder or import a custom theme that was created with the Kendo UI ThemeBuilder.

## Predefined Themes

The predefined themes provide general appearance and layout options for the generated web application, and are bundled and ready to use.

The [Kendo UI for jQuery suite](https://docs.telerik.com/kendo-ui/introduction), which delivers the AngularJS-integrated widgets, ships more predefined themes than the [Kendo UI for Angular suite](https://www.telerik.com/kendo-angular-ui/) does. To keep the parity between the predefined themes for the two frameworks, the Builder supplies the missing counterparts as packages that are previously created and bundled with the [Progress<sup>®</sup> Sass ThemeBuilder](http://themebuilder.telerik.com/). Except for the Default Orange, Bootstrap v4, and Material themes, all other available themes for the Angular framework were beforehand generated with the ThemeBuilder.

* [Predefined themes by Kendo UI for Angular](https://www.telerik.com/kendo-angular-ui/components/styling/)
* [Less-based themes by Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/styles-and-layout/appearance-styling)  
* [SASS-based themes by Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/styles-and-layout/sass-themes)

## Custom Themes

The custom themes of the Builder provide only appearance (color) settings for the generated web projects. The theme layout and metrics are inherited from the Kendo UI base stylesheets.

### Using Integrated Icon Fonts

* [Font icons by Kendo UI for Angular](https://www.telerik.com/kendo-angular-ui/components/styling/icons/)
* [Font icons by Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web)

### Creating Themes with the ThemeBuilder

* [Progress<sup>®</sup> Sass ThemeBuilder for Angular](http://themebuilder.telerik.com/kendo-angular-ui).
* [Progress<sup>®</sup> Sass ThemeBuilder for Angular](http://themebuilder.telerik.com/kendo-angular-ui).

### Unarchiving the Theme Files

After the custom theme is generated, the ThemeBuilder produces a `.zip` folder which contains the custom theme files:

* For Angular projects, the ThemeBuilder saves the `.zip` archive in `[appname]\app\src\assets\custom-themes`.
* For AngularJS projects, the ThemeBuilder saves the `.zip` archive in `[appname]\app\src\styles\custom-themes`.

To import the custom theme, the Kendo UI Builder requires only the unarchived `.css` file of the custom theme&mdash;select a location and unarchive the `.rar` folder there.

### Importing the Theme

1. On the Dashboard, click the card (or list item) of the application to open the **App Design** page.
1. Next to the application name, click the **Settings** icon to open the drop-down options list.
1. Select **Properties** to open the **Edit App** dialog box.
1. Click the **Theme** drop-down options list to open the **Import ThemeBuidler Theme** dialog box.
1. Click **Import ThemeBuilder Theme** for the location dialog box to open.
1. Select the location of the dearchived `.css` file and click **Open**.

  > The Builder only accepts the custom theme files with a `.css` extension.

1. Click **Apply**.
1. On the **Edit App** dialog box, click **Save**. As a result, the custom theme is added to the list of available themes.

You can also access the ThemeBuilder for the respective framework of your current project from the **Edit App** page by clicking the **Go to Kendo UI ThemeBuidler** link.

## Suggested Links

* [Customizing Themes with the Kendo UI Builder]({% slug customthemes_kuib %})
* [Customizing Styles with the Kendo UI Builder]({% slug customstyles_kuib %})
* [Styles and Appearance with Kendo UI for Angular](https://www.telerik.com/kendo-angular-ui/components/styling/)
* [Progress Sass ThemeBuilder for Angular](http://themebuilder.telerik.com/kendo-angular-ui)
* [Styles and Appearance with Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/styles-and-layout/appearance-styling)
* [Progress Sass ThemeBuilder for AngularJS](http://themebuilder.telerik.com/kendo-ui)
