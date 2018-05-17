---
title: Image
page_title: Image - Components - Kendo UI Builder
description: "Use and implement the Image when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: image_kuib
---

# Image

The Image is part of the Media components which the Builder supports.

## Usage

* Represents a static visual component.
* Supports the `.bmp`, `.jpg`, `.gif`, and `.png` file extensions.
* You can either specify the location of an image file by using the **Source** property or specify a data model. When you specify a data model, specify also a field in the data model that contains an image binary. By doing this, the image is updated together with the data model which is useful when, for example, the view contains a Data Grid and you want to update the image when a user selects a row in the Data Grid.

## Properties of Interest

* **Model**&mdash;The data model that is associated with this component. For more information, refer to the article on [using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Source**&mdash;The file path of the image file. To specify the file path, click the folder icon and navigate to the location of the image file. The image file gets copied to `app/src/images` for AngularJS and in `app/src/assets/images` for Angular the application generates the files for the view.
* **Navigate Url**&mdash;The URL to which the browser navigates when the user clicks the image. Can be absolute or relative.

## Suggested Links

* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
