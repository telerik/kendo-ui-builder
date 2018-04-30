---
title: Overview
page_title: Overview - Data Providers - Kendo UI Builder
description: "Use the available data services and data sources which are supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: dataprovidersoverview_kuib
position: 1
---

# Data Providers Overview

In the Builder, data providers enable services for establishing the connection between the data you want to display and the data source you want to use.

* Each data provider is represented by a single URI.
* The definition of a data provider identifies the authentication model which is required to access the data server it supports.
* A data provider is defined by a JSON file on the web server.
* You can create multiple data providers.
* You can define one or more data sources from the same data provider.

<div class="container-fluid">
<div class="row separator-bottom">
<div class="col-md-4 card-list-info">
    <h2>Data Services</h2>
    <p>The data services deliver access to one or more resources which provide the data you can specify for the data provider.</p>
</div>
<div class="col-md-8">
    <ul class="card-list row">
        <li class="col-xs-4 col-md-3">
            <a href="{% slug odata_kuib %}">
                <img src="../images/icons/data-providers/OData.svg" width="64" height="64" alt="OData" title="OData"/>
                <p>OData</p>
            </a>
        </li>
        <li class="col-xs-4 col-md-3">
            <a href="{% slug rest_kuib %}">
                <img src="../images/icons/data-providers/Generic-REST.svg" width="64" height="64" alt="Generic REST" title="Generic REST"/>
                <p>Generic REST</p>
            </a>
        </li>
        <li class="col-xs-4 col-md-3">
            <a href="{% slug progressdata_kuib %}">
                <img src="../images/icons/data-providers/Progress-Data-Provider.svg" width="64" height="64" alt="Progress Data Provider" title="Progress Data Provider"/>
                <p>Progress Data</p>
            </a>
        </li>
    </ul>
</div>
</div>
<div class="container-fluid">
<div class="row separator-bottom">
<div class="col-md-4 card-list-info">
    <h2>Data Sources</h2>
    <p>The data sources are located within the data providers. They represent the datasets which you can bind to the views and can be created automatically or manually. You can also modify them to show all or only specific columns.</p>
</div>
<div class="col-md-8">
    <ul class="card-list row">
    <li class="col-xs-4 col-md-3">
        <a href="{% slug datasources_kuib %}">
           <svg id="area" viewBox="0 0 70 70">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ffab09" />
                        <stop offset="70%" stop-color="#ff6358" />
                        <stop offset="100%" stop-color="#dd3169" />
                    </linearGradient>
                </defs>
                <path d="..." />
            </svg>
            <p>Overview</p>
        </a>
    </li>
  </ul>
</div>
</div>
</div>

## Suggested Links

* [Designing the Application]({% slug designingtheapp_kuib %})
