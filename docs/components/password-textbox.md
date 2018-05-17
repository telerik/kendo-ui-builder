---
title: Password Text Box
page_title: Password Text Box - Components - Kendo UI Builder
description: "Use and implement the Password Text Box when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: passwordtextbox_kuib
---

# Password Text Box

The Password Text Box is part of the Editors components which the Builder supports.

## Usage

Represents a text box for user input with hidden displayed value for password input.

## Properties of Interest

* **Debounce**&mdash;Represents delay time in milliseconds after which the change will be triggered. For more information on date formatting options, refer to the article on [AngularJS Debouncing updates](https://docs.angularjs.org/api/ng/directive/ngModelOptions#debouncing-updates) or [Angular Debounce Time](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-debounceTime).
* **Model**&mdash;The data model that is associated with this component. For more information, refer to the article on [using data source instances]({% slug blankview_kuib %}#toc-using-data-source-instances).
* **Change Event Function**&mdash;Fired when the value of the component is changed by the user.

    > Include any custom code for this event function in the `controller.public.js` file for AngularJS or in the `[view-name].view.component.ts` file for Angular which are located in the `\app\src\modules\[module-name]\[view-name]` folder. For more information, refer to the article on [custom code]({% slug customcode_kuib %}).

## Suggested Links

* [Kendo UI TextBox for Angular](https://www.telerik.com/kendo-angular-ui/components/inputs/textbox/)
* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
