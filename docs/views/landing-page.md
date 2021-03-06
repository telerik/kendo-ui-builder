---
title: Landing Page
page_title: Landing Page - Views - Kendo UI Builder
description: "Learn how to use the system Landing Page view which is provided by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: landingpage_kuib
---

# Landing Page View

The Landing Page view is one of the system views which the [Application Module]({% slug appmodule_kuib %}) provides by default.

## Features

* Represents the layout of the web page that will load when the user clicks a search engine optimized result or an online advertisement.
* Lists all modules inside its content.
* Allows you to apply different styles to the view content by clicking the **Edit CSS** button and writing your own custom styles in the opened editor.
* Includes custom sections where you can add your own HTML. Each section is identified in the view design page by a placeholder which contains descriptive text.
    * Custom top HTML section&mdash;Located in the area above **Content** with the list of modules.
    * Custom bottom HTML section&mdash;Located in the area below **Content**.

    For Angular, the Builder generates these files in the `\app\src\app\modules\application\landing-page` folder. For AngularJS, the Builder generates these files in the `\app\src\modules\application\landing-page` folder. Add your custom HTML code to the generated files and use the **Edit** option on each custom HTML section to edit the corresponding file from within the Builder.

## Preview

<img src="../../images/kuib-views-landing-page.png" class="img-responsive" alt="Landing Page View"/>

## Suggested Links

* [Views]({% slug viewsoverview_kuib %})
