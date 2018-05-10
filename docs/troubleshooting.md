---
title: Troubleshooting
page_title: Troubleshooting | Kendo UI Builder
description: "Learn about the issues that may occur when using the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: troubleshooting_kuib
position: 14
---

# Troubleshooting

This article provides solutions for issues you might encounter while working with the Kendo UI Builder.

// STRUCTURE OF TROUBLESHOOTING TOPICS:
// 1. SUMMARIZE THE PROBLEM IN A SENTENCE
// 2. PROVIDE DETAILS AND ERROR MESSAGE, IF APPLICABLE
// 3. IDENTIFY THE CAUSE
// 4. PROVIDE THE SOLUTION OR SUGGEST A WORKAROUND

// STICK TO SIMILAR STRUCTURE: https://www.telerik.com/kendo-angular-ui/components/troubleshooting/


# Moved from debugging

You can locate possible problems, investigate them accordingly, and debug your web project by using the available debugging options.

To debug your web application before it is published:

* The `KUIBLog.log` file&mdash;The `KUIBLog.log` file stores all detected application errors and is generated every time the application is generated through the **Generate** output option. To debug the project, open `KUIBLog.log` and look into its output.

    On Windows, `KUIBLog.log` is located in `C:\Users\[username]\AppData\Roaming\KendoUIBuilder\KUIBLog.log`.
    On MacOS, `KUIBLog.log` is located in ...

* Popup notifications&mdashh;The Builder renders popup notifications for the successful and unsuccessful fulfilment of commands that were submitted through its UI. For example, if the Builder was not able to load a data provider or render a custom template, it will display a popup notification for the unsuccessful operation.   
* The **>_ OUTPUT** bar&mdash;**>_ OUTPUT** displays the log messages of the application. The logger is located at the bottom of each Builder page.
* The **Toggle Developer Tools** option&mdash;**Toggle Developer Tools** simulates debugging in the browser. To open the console log window, go to the Builder toolbar and select **Help** > **Toggle Developer Tools**.



## Suggested Links

* [Installing the Kendo UI Builder]({% slug getstarted_kuib %})
* [Frequently Asked Questions (FAQ)]({% slug faq_kuib %})
