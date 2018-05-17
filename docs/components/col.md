---
title: Col
page_title: Col - Components - Kendo UI Builder
description: "Use and implement the Col when working with the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: col_kuib
---

# Col

The Col is part of the Layout components which the Builder supports.

## Usage

* Represents a column element.
* Allows configuration options such as adding, data managing, and deletion.
* Cols are used for building responsive layouts in [**Blank View**]({% slug blankview_kuib %}) and [**App Layout View**]({% slug applayout_kuib %})
* Cols allows only components and rows to be drag dropped as content, you cannot drag drop col in a col.

## Properties of Interest

* **Column widths**&mdash;You can specify, or change the width (Column span) of the column for each screen size. There are 12 "slots" available for columns in each row, and a column can take up one or more slots. For example, you can have 12 columns that span one slot each, or three columns that span four slots each.

* **Hide on**&mdash;You can hide a column on a given screen size by selecting the checkbox for that screen width. You can use this feature to provide more details on larger screens while minimizing the content shown for smaller devices.

* **Allowed Roles**&mdash;You can assign certain user roles to column and it will be rendered only when currently logged user has this/these role/roles. For more information refer to [Authorization documentation]({% slug rolesauthoriz_kuib %})

## Suggested Links

* [Kendo UI Builder Components]({% slug viewsoverview_kuib %})
