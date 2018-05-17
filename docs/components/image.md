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
* You can either specify the location of an image file using the Source property or specify a data model. When you specify a data model, you also specify a field in the data model that contains an image binary. Doing this updates the image when the data model is updated. This is useful in cases where, for example, your view contains a data grid and you want the image updated when a user selects a row in the data grid.

## Properties of Interest

* **Model**&mdash;The data model associated with this component. For more information refer to the article on [Using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Source**&mdash;The filepath of the image file. To specify the filepath, click the folder icon and navigate to the location of the image file. The image file gets copied to (AngularJs) `app/src/images` (Angular) `app/src/assets/images` when files for the view are generated.
* **Navigate Url**&mdash;The url to which the browser will navigate when user clicks on the image. Can be absolute or relative.

## Suggested Links

* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
