---
title: Overview
page_title: Overview - Data Providers - Kendo UI Builder
description: "Use the available data services and data sources which are supported by the Kendo UI Builder tool for creating and managing Angular and AngularJS-based web applications."
slug: dataprovidersoverview_kuib
position: 1
---

# Data Providers Overview

Data providers are data services which provide access to the data you want to render and to the associated business logic of your project.

Each data provider is represented by a single service URI. While the data provider defines one data service, it can still apply one or more data sources. You can also create multiple data providers.

The Builder supports the provision of the [OData](), [Progress Data](), and [generic REST]() data services and the respective usage of [data sources]().

<div class="container-fluid">
<div class="row separator-bottom">
<div class="col-md-4 card-list-info">
    <h2>Data Services</h2>
    <p>The data services represent the means of transportation for the data you want to render in your web application.</p>
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
    <p>The data sources are located within the data providers. They represent the datasets which you can link to the components within the views and modify them to show all or only specific columns within a data source.</p>
</div>
<div class="col-md-8">
    <ul class="card-list row">
    <li class="col-xs-4 col-md-3">
        <a href="{% slug dataspurces_kuib %}">
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
            <p>App Layout</p>
        </a>
    </li>
  </ul>
</div>
</div>
