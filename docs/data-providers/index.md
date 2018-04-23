---
title: Overview
page_title: Overview - Data Providers - Kendo UI Builder
description: "Use the available data services and data sources which are supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: dataprovidersoverview_kuib
position: 1
---

# Data Providers Overview

Data providers enable services for establishing the connection between the data you want to display and the data source you want to use. 

Each data provider is represented by a single service URI. While a data provider defines one data service, you can still define one or more data sources from the same data service to a single data provider. You can also create multiple data providers.

A data service is defined by a JSON file on the web server and you can specify it by using its URI. The data provider definition also identifies the authentication model which is required to access the data server (web application) it supports.

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
            <p>OData</p>
        </a>
    </li><li class="col-xs-4 col-md-3">
        <a href="{% slug rest_kuib %}">
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
            <p>Generic REST</p>
        </a>
    </li><li class="col-xs-4 col-md-3">
        <a href="{% slug progressdata_kuib %}">
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
