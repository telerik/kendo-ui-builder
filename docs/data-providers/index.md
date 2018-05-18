---
title: Overview
page_title: Overview - Data Providers - Kendo UI Builder
description: "Use the available data services and data sources which are supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: dataprovidersoverview_kuib
position: 1
---

# Data Providers Overview

Data providers enable services for establishing the connection between the data you want to display and the data source you want to use.

* A data provider is an abstraction for data which describes a single URI (OData and Progress Data) or base URI (Generic REST).
* The endpoints in the data providers can be either protected or not. The definition of a data provider identifies the authentication model which is required to access the data server it supports.
* You can define the OData and Progress Data providers by a schema file on the web server and generate all child data sources based on that schema.
* You can create multiple data providers.
* You can define one or more data sources from the same data provider.

<div class="container-fluid">
<div class="row separator-bottom">
<div class="col-md-4 card-list-info">
    <h2>Supported Services</h2>
    <p>The data services deliver access to one or more resources which provide the data.</p>
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
    <p>The data sources are located within the data providers and represent the datasets which you can bind to the views. They can be created automatically or manually and you can also modify them to show all or only specific fields.</p>
</div>
<div class="col-md-8">
    <ul class="card-list row">
        <li class="col-xs-4 col-md-3">
            <a href="{% slug datasources_kuib %}">
                <img src="../images/icons/data-providers/Data-Source.svg" width="64" height="64" alt="OData" title="OData"/>
                <p>Data Sources</p>
            </a>
        </li>
   </ul>
</div>
</div>
</div>

## Suggested Links

* [Adding, Editing, and Removing Data Providers]({% slug designingtheapp_kuib %}#toc-data-providers)
* [Data Sources]({% slug datasources_kuib %})
